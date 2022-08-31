const { Router } = require('express');
const mesaJogadorRouter = Router();
const mesaJogadorController = require('../controllers/mesajogadorController');



mesaJogadorRouter.get('/mesajogador', mesaJogadorController.index);

module.exports = mesaJogadorRouter;