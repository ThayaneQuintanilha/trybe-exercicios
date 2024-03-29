const app = require('./app');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');

app.post('/activities', validateName, validatePrice, validateDescription, validateCreatedAt, validateRating, validateDifficulty, (req, res) => {
  res.status(201).json({ message: 'Atividade foi cadastrada com sucesso!'})
})

module.exports = app;