module.exports = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'O nome é obrigatório!' })
  }

  if(name.length < 4) {
    return res.status(400).json({ message: 'Nome deve ser maior que 4 caracteres' })
  }

  next();
}