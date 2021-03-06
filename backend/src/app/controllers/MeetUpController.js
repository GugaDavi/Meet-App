import { startOfHour, parseISO, isBefore } from 'date-fns';
import * as Yup from 'yup';

import MeetUp from '../models/MeetUp';
import File from '../models/File';

class MeetUpController {
  async index(req, res) {
    const meetups = await MeetUp.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: File,
          attributes: ['id', 'path', 'url'],
        },
      ],
      order: ['date'],
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      localization: Yup.string().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Informações invalidas ou faltantes' });
    }

    const { title, description, localization, date, banner } = req.body;
    const user_id = req.userId;

    const startDate = startOfHour(parseISO(date));

    if (isBefore(startDate, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const meetUp = await MeetUp.create({
      title,
      description,
      localization,
      date: startDate,
      banner_id: banner,
      user_id,
    });

    const addBannerInfos = await MeetUp.findOne({
      where: {
        id: meetUp.id,
      },
      include: [
        {
          model: File,
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(addBannerInfos);
  }

  async update(req, res) {
    const { id: meetUpId } = req.params;

    const meetapp = await MeetUp.findOne({
      where: {
        id: meetUpId,
        user_id: req.userId,
      },
    });

    if (!meetapp) {
      return res.status(400).json({ error: 'MeetUp not find or not yours' });
    }

    if (isBefore(meetapp.date, new Date())) {
      return res.status(400).json({ error: 'Can not change past meetup' });
    }

    const { date } = req.body;

    const dateStart = startOfHour(parseISO(date));

    if (date) {
      if (isBefore(dateStart, new Date())) {
        return res.status(400).json({ error: 'Past dates are not permitted' });
      }
    }

    const {
      title,
      description,
      localization,
      banner_id,
    } = await meetapp.update(req.body);

    return res.json({ title, description, localization, banner_id, date });
  }

  async destroy(req, res) {
    const meetup = await MeetUp.findByPk(req.params.id);

    if (!meetup) {
      return res.status(400).json({ errro: 'Meetup not find or not yours' });
    }

    if (isBefore(meetup.date, new Date())) {
      return res.status(401).json({ error: 'You can not cancel past dates' });
    }

    meetup.canceled_at = new Date();

    await meetup.save();

    return res.send();
  }
}

export default new MeetUpController();
