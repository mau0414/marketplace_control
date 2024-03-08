import jwt from 'jsonwebtoken';
import User from '../models/User.js';

class TokenController {
  async create(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          errors: ['Authentication info empty'],
        });
      }

      const user = await User.findOne({ where: { email } });
      console.log('usuario', user);
      if (!user) {
        return res.status(401).json({
          errors: ['user with email sent not found'],
        });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({
          errors: ['wrong password'],
        });
      }

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token });
    } catch (e) {
      return res.json(e);
    }
  }
}

export default new TokenController();
