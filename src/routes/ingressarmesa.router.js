const { Router } = require('express');
const ingressarMesaRouter = Router();
const ingressarMesaController = require('../controllers/ingressarmesaController');



ingressarMesaRouter.get('/ingressarmesa', ingressarMesaController.index);

module.exports = ingressarMesaRouter;