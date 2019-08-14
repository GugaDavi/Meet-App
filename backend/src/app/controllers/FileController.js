import File from '../models/File';

class FileController {
  async index(req, res) {
    const files = await File.findAll({
      where: {
        user_id: req.userId,
      },
      attributes: ['id', 'name', 'path'],
    });

    return res.json({ files });
  }

  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const user_id = req.userId;

    const file = await File.create({
      name,
      path,
      user_id,
    });

    return res.json({ file });
  }
}

export default new FileController();
