import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import MeetUp from '../models/MeetUp';
import File from '../models/File';

class ScheduleMeetUpController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const { date } = req.query;
    let meetups;

    if (!date) {
      meetups = await MeetUp.findAll({
        include: [
          {
            model: File,
            attributes: ['id', 'path', 'url'],
          },
        ],
        limit: 20,
        offset: (page - 1) * 20,
      });

      return res.json(meetups);
    }

    const startHour = startOfDay(parseISO(date));
    const endHour = endOfDay(parseISO(date));

    meetups = await MeetUp.findAll({
      where: {
        date: {
          [Op.between]: [startHour, endHour],
        },
      },
      include: [
        {
          model: File,
          attributes: ['id', 'path', 'url'],
        },
      ],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(meetups);
  }
}

export default new ScheduleMeetUpController();
