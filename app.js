import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import userRoutes from './src/routes/user.js';
import tokenRoutes from './src/routes/token.js';
import productRoutes from './src/routes/product.js';
import photoRoutes from './src/routes/photo.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/products', productRoutes);
    this.app.use('/photo', photoRoutes);
  }
}

export default new App().app;
