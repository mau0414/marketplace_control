import { Router } from 'express';
import userController from '../controllers/UserController.js';

const router = new Router();

router.get('/', userController.index);
router.post('/create', userController.create);
router.post('/delete', userController.delete);

export default router;
