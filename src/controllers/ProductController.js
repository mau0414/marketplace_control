// import jwt from 'jsonwebtoken';
// import  from '../models/User.js';
import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    try {
      const products = await Product.findAll();

      return res.json(products);
    } catch (e) {
      return res.json({
        erros: [
          'erro ao ler todos produtos',
        ],
      });
    }
  }

  async create(req, res) {
    try {
      const newProduct = await Product.create(req.body);
      return res.json(newProduct);
    } catch (e) {
      return res.status(400).json({
        errors: ['product with id sent not found'],
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['an id must be send'],
        });
      }

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(400).json({
          errors: ['product with id sent not found'],
        });
      }

      await product.destroy();
      return res.json(`product of id ${id} deleted`);
    } catch (e) {
      return null;
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['an id must be send'],
        });
      }

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(400).json({
          errors: ['product with id sent not found'],
        });
      }

      await product.update(req.body);
      return res.json({ 'new product': product });
    } catch (e) {
      console.log('erro aqui', e.errors);
      return res.status(400).json({
        // error: e,
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['an id must be send'],
      });
    }

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(400).json({
        errors: ['product with id sent not found'],
      });
    }

    return res.json(product);
  }
}

export default new ProductController();
