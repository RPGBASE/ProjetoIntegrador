const { Router } = require('express');
const cadastroRouter = Router();
const cadastroController = require('../controllers/cadastroController');




cadastroRouter.get('/cadastro', cadastroController.create);
cadastroRouter.post('/cadastro', cadastroController.salva)

module.exports = cadastroRouter;