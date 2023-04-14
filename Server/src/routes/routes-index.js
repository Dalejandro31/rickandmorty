const express = require('express');
const router = express.Router();

const {getCharById} = require('../controllers/getCharById');
const {login} = require('../routes/login');
const {postFav, deleteFav} =require('../controllers/handleFavorites');

//ruta para obtener un personaje por su id
router.get('/character/:id',getCharById);

//ruta para el inicio de sesion
router.get('/login',login);

//ruta para agregar un favorito
router.post('/fav',postFav);

//ruta para eliminar un favorito por su id
router.delete('/fav/:id', deleteFav);

module.exports= router;




