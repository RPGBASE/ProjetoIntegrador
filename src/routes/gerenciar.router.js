const { Router } = require('express');
const gerenciarRouter = Router();
const gerenciarController = require('../controllers/gerenciarController');



gerenciarRouter.get('/gerenciar', gerenciarController.index);

module.exports = gerenciarRouter;