const app = require('./app');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');

app.post('/activities', validateName, validatePrice, validateDescription, validateCreatedAt, validateRating, (req, res) => {
  res.status(201).json({ message: 'Atividade foi cadastrada com sucesso!'})
})

module.exports = app;