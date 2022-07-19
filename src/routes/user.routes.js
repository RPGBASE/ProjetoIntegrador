const { Router } = require('express');
const userRoutes = Router();
const rpgController = require('../controllers/rpgController');



userRoutes.get('/', rpgController.index);
userRoutes.post('/:idUser', rpgController.home);

module.exports = userRoutes;