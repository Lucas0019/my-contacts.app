const CategoriesRepository = require('../repositories/CategoriesRepository');
require('express-async-errors');

class CategoryControler {
  // Lista todas as categorias
  async index(req, res) {
    const { orderBy } = req.query;

    const categories = await CategoriesRepository.findAll(orderBy);

    res.json(categories);
  }

  // Lista uma categoria
  async show(req, res) {
    const { id } = req.params;

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(category);
  }

  // Cria uma nova categoria
  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    res.json(category);
  }

  // Atualiza uma categoria
  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return res.status(404).json({ error: 'Category not found' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.update(id, { name });

    res.json(category);
  }

  // Remove uma categoria
  async delete(req, res) {
    const { id } = req.params;

    await CategoriesRepository.delete(id);

    // 204: No content
    res.sendStatus(204);
  }
}

module.exports = new CategoryControler();
