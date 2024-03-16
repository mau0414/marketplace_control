import Sequelize, { Model } from 'sequelize';
import User from './User';

export default class Product extends Model {
  static init(sequelize) {
    super.init({
      owner_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          async checkUserId(value) {
            const user = await User.findByPk(value);

            if (!user) {
              throw new Error('user with id sent does not exist');
            }
          },
          isInt: {
            msg: 'id must be an integer number',
          },
          isPositive(value) {
            if (value < 0) throw new Error('id do dono deve ser maior que zero');
          },
        },
      },
      product_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 200],
            msg: 'nome do produto deve ter de 4 a 200 caracteres',
          },
        },
      },
      stock_quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'id must be an integer number',
          },
          isPositive(value) {
            if (value < 0) throw new Error('estoque atual deve ser maior que zero');
          },
        },
      },
      initial_quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'id must be an integer number',
          },
          isPositive(value) {
            if (value < 0) throw new Error('estoque inicial deve ser maior que zero');
          },
        },
      },
      price: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: 'id must be an integer or float number',
          },
          isPositive(value) {
            if (value < 0) throw new Error('preco deve ser maior que zero');
          },
        },
      },
      category: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 200],
            msg: 'categoria deve ter entre 2 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.belongsTo(User, {
      foreignKey: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    return this;
  }
}
