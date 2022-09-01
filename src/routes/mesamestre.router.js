const { Router } = require('express');
const mesaMestreRouter = Router();
const mesaMestreController = require('../controllers/mesamestreController');



mesaMestreRouter.get('/mesamestre', mesaMestreController.index);

module.exports = mesaMestreRouter;