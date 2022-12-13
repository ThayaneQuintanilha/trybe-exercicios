const app = require('./app');

app.use(express.json());

app.post('/activities', (req, res) => {
  res.status(201).json({ message: 'Atividade foi cadastrada com sucesso!'})
})

module.exports = app;