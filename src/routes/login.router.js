const { Router } = require('express');
const loginRouter = Router();
const loginController = require('../controllers/loginController');



loginRouter.get('/', loginController.index);
loginRouter.get('/:idUser', loginController.home);

module.exports = loginRouter;