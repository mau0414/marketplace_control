import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import User from '../models/User.js';
import Product from '../models/Product.js';

const connection = new Sequelize(databaseConfig);
const models = [User, Product];

models.forEach((model) => model.init(connection));
