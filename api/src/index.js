const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

// Middleware para erros
app.use((error, req, res, next) => {
  console.log(error);
  res.json({ error: error.message });
  res.sendStatus(500);
});

app.listen(3000, () => {
  console.log('🔥 Server started at http://localhost:3000');
});
