const { Client } = require('pg');

// Criando a conexão com o banco de dados
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

// Conectando com o banco de dados
client.connect();

// Exportando o client para ser usado em outros arquivos
exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
