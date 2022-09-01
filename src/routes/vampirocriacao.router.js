const { Router } = require('express');
const vampiroCriacaoRouter = Router();
const vampiroCriacaoController = require('../controllers/vampirocriacaoController');



vampiroCriacaoRouter.get('/vampirocriacao', vampiroCriacaoController.index);

module.exports = vampiroCriacaoRouter;