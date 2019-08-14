import { Op } from 'sequelize';
import { isBefore, startOfHour, format } from 'date-fns';

import Inscription from '../models/Inscription';
import MeetUp from '../models/MeetUp';
import User from '../models/User';

import Mail from '../../lib/Mail';

class InscriptionController {
  async index(req, res) {
    const meetups = await Inscription.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: MeetUp,
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
          required: true,
        },
      ],
      order: [[MeetUp, 'date']],
    });

    return res.json({ meetups });
  }

  async store(req, res) {
    const meetup = await MeetUp.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name', 'email'],
        },
      ],
    });
    const user = await User.findByPk(req.userId);

    // Check if meetup exist

    if (!meetup || meetup.user_id === user.id) {
      return res.status(400).json({
        error: 'Meetup not found or You are a master at this meeting',
      });
    }

    // Check if meetup past

    if (isBefore(meetup.date, new Date())) {
      return res
        .status(401)
        .json({ error: 'Can not register in previous meetups' });
    }

    // Check if Exsit Inscription

    const inscriptionExist = await Inscription.findOne({
      where: {
        meetup_id: meetup.id,
        user_id: user.id,
      },
    });

    if (inscriptionExist) {
      return res.status(401).json({ error: 'Duplicate Inscription' });
    }

    // Check for Inscription with identical time

    const startHour = startOfHour(meetup.date);

    const identicalTime = await Inscription.findOne({
      where: {
        user_id: user.id,
      },
      include: [
        {
          model: MeetUp,
          required: true,
          where: {
            date: startHour,
          },
        },
      ],
    });

    if (identicalTime) {
      return res.status(401).json({
        error:
          'It is not possible to register in two matches with identical time',
      });
    }

    // Insert Inscription

    const { id: user_id } = user;
    const { id: meetup_id } = meetup;

    const inscription = await Inscription.create({
      user_id,
      meetup_id,
    });

    // Notify Manager

    const formattedDate = format(meetup.date, "dd/MM/yyyy 'às' HH:mm'h'");

    await Mail.sendMail({
      to: `${meetup.User.name} <${meetup.User.email}>`,
      subject: `Inscrição efetuada`,
      template: 'register',
      context: {
        manager: meetup.User.name,
        meetup: meetup.title,
        date: formattedDate,
        user: user.name,
        email: user.email,
      },
    });

    return res.json({ inscription });
  }
}

export default new InscriptionController();
