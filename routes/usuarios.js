const express = require('express');
const router = express.Router();
const usuarios = require('../controllers/usuarios');

router.get('/', function(req, res){
    usuarios.index(req,res);
});

router.post('/addusuario', function(req, res) {
    usuarios.create(req,res);
});

router.get('/getusuario', function(req, res) {
    usuarios.list(req,res);
});

router.post('/findusuario', function(req, res) {
    console.log("Llegue aqui /findusuario:")
    usuarios.find(req,res);
});

/*Basado en Lab06 Proy3, mi laboratorio 4 Mirella Rivas*/

router.get('/dpermiso/:id', function(req, res) {
    console.log("Doy permiso")
    usuarios.dpermiso(req,res);
});

/*Basado en Lab06 Proy3, mi laboratorio 4 Mirella Rivas*/
router.get('/qpermiso/:id', function(req, res) {
    console.log("Doy permiso")
    usuarios.qpermiso(req,res);
});



module.exports = router;
