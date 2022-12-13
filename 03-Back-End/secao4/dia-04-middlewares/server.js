const app = require('./app');
const validateName = require('./middlewares/validateName');

app.use(express.json());

app.post('/activities', validateName, (req, res) => {
  res.status(201).json({ message: 'Atividade foi cadastrada com sucesso!'})
})

module.exports = app;