import File from '../models/File';

class FileController {
  async index(req, res) {
    const files = await File.findAll({
      where: {
        user_id: req.userId,
      },
    });

    res.json({ files });
  }

  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const user_id = req.userId;

    const file = await File.create({
      name,
      path,
      user_id,
    });

    res.json({ file });
  }
}

export default new FileController();
