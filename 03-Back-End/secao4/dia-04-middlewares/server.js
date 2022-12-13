const app = require('./app');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');

app.post('/activities', validateName, validatePrice, validateDescription, (req, res) => {
  res.status(201).json({ message: 'Atividade foi cadastrada com sucesso!'})
})

module.exports = app;