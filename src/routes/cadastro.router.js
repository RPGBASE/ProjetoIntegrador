const { Router } = require('express');
const cadastroRouter = Router();
const cadastroController = require('../controllers/cadastroController');




cadastroRouter.get('/cadastro', cadastroController.create);

module.exports = cadastroRouter;