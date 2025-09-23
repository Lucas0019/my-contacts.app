const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Listar todos os registros
  async index(req, res) {
    const { orderBy } = req.query;

    const contacts = await ContactsRepository.findAll(orderBy);

    res.json(contacts);
  }

  // Obter um registro
  async show(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not found
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(contact);
  }

  // Criar novo registro
  async store(req, res) {
    const { name, email, phone, category_id } = req.body;

    if (!name) {
      // 400: Bad request
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      // 400: Bad request
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    res.json(contact);
  }

  // Editar um registro
  async update(req, res) {
    const { id } = req.params;
    const { name, email, phone, category_id } = req.body;

    const contactExists = await ContactsRepository.findById(id);

    if (!contactExists) {
      // 404: Not found
      return res.status(404).json({ error: 'User not found' });
    }

    if (!name) {
      // 400: Bad request
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      // 400: Bad request
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    res.json(contact);
  }

  // Deletar um registro
  async delete(req, res) {
    const { id } = req.params;

    await ContactsRepository.delete(id);

    // 204: No content
    res.sendStatus(204);
  }
}

// Singleton pattern
module.exports = new ContactController();
