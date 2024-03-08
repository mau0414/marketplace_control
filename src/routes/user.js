import { Router } from 'express';
import userController from '../controllers/UserController.js';
import loginCheck from '../middlewares/loginCheck.js';

const router = new Router();

router.get('/', loginCheck, userController.index);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.delete('/:id', userController.delete);
router.put('/:id', userController.update);

export default router;
