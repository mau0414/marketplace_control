import { Router } from 'express';
import homeController from '../controllers/HomeController.js';

const router = new Router();

router.get('/', homeController.showHome);

export default router;
