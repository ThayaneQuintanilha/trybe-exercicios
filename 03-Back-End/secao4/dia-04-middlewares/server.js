const app = require('./app');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');

app.post('/activities', validateName, validatePrice, (req, res) => {
  res.status(201).json({ message: 'Atividade foi cadastrada com sucesso!'})
})

module.exports = app;