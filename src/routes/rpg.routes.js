const { Router } = require('express');
// O {Router} está desestruturado//


const rpgController = require('../controllers/rpgController');

const userRoutes = Router();

userRoutes.get('/', rpgController.index);
userRoutes.get('/:id', rpgController.show);

module.exports = userRoutes;