import { Router } from 'express';
import userController from '../controllers/UserController.js';
import loginCheck from '../middlewares/loginCheck.js';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.create);
router.delete('/', loginCheck, userController.delete);
router.put('/', loginCheck, userController.update);

export default router;
