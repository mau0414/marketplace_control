import { Router } from 'express';
import multer from 'multer';
import photoController from '../controllers/PhotoController.js';

import multerConfig from '../config/multer.js';
// import loginCheck from '../middlewares/loginCheck.js';

const router = new Router();
const upload = multer(multerConfig);

router.post('/', upload.single('photo'), photoController.create);

export default router;
