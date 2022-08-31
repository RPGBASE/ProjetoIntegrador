const { Router } = require('express');
const criacaoMesaRouter = Router();
const criacaoMesaController = require('../controllers/criacaomesaController');



criacaoMesaRouter.get('/criacaomesa', criacaoMesaController.index);

module.exports = criacaoMesaRouter;