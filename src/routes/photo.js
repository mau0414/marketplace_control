import { Router } from 'express';
import photoController from '../controllers/PhotoController.js';

// import loginCheck from '../middlewares/loginCheck.js';

const router = new Router();

router.post('/', photoController.create);

export default router;
