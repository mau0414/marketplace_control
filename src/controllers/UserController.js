import User from '../models/User.js';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);

      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json('Missing ID');
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json('User does not exist');
      }

      await user.destroy();
      return res.json(user);
    } catch (e) {
      return null;
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.status(400).json('no users found');
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json('Missing ID');
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json('User does not exist');
      }
      console.log('nem executa aqui', user);
      await user.update(req.body);
      return res.json(user);
    } catch (e) {
      console.log('erro aqui', e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json('Missing ID');
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist'],
        });
      }

      return res.json(user);
    } catch (e) {
      return null;
    }
  }
}

export default new UserController();
