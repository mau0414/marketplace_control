import User from '../models/User.js';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);

      res.json(novoUser);
    } catch (e) {
      console.log('erro aqui:', e);
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    const result = await User.destroy({
      where: {
        id: 1,
      },
    });

    res.json(result);
  }

  index(req, res) {
    console.log('chegou em home');
    res.json({
      msg: 'Ack',
    });
  }
}

export default new UserController();
