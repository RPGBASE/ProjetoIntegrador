const { Router } = require('express');
// O {Router} está desestruturado//

const userRoutes = Router();

const rpgController = require('../controllers/rpgController');



userRoutes.get('/', rpgController.index);
userRoutes.post('/:idUser', rpgController.cadastro);

module.exports = userRoutes;