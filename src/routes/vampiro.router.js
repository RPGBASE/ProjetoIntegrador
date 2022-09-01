const { Router } = require('express');
const vampiroRouter = Router();
const vampiroController = require('../controllers/vampiroController');



vampiroRouter.get('/vampiro', vampiroController.index);

module.exports = vampiroRouter;