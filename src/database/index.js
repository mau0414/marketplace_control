import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import User from '../models/User.js';

const connection = new Sequelize(databaseConfig);
const models = [User];

models.forEach((model) => model.init(connection));
