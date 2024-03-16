import { Router } from 'express';
import productController from '../controllers/ProductController.js';
import loginCheck from '../middlewares/loginCheck.js';

const router = new Router();

router.get('/', loginCheck, productController.index);
router.post('/', loginCheck, productController.create);
router.get('/:id', loginCheck, productController.show);
router.delete('/:id', loginCheck, productController.delete);
router.put('/:id', loginCheck, productController.update);

export default router;
