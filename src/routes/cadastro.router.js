const { Router } = require('express');
const cadastroRouter = Router();
const cadastroController = require('../controllers/cadastroController');



cadastroRouter.get('/', cadastroController.index);
cadastroRouter.get('/:idUser', cadastroController.home);

module.exports = cadastroRouter;