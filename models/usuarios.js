const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Basado en la pc2 de Claudia Pacori en https://github.com/Claudia-Pacori/pc2
// Modificado para la base de datos que usaremos
const Usuarios = new Schema ({
        nombre: {type: String, required: true, max: 50},
        apellido: {type: String, required: true, max: 50},
        email: {type: String, required: true, max: 50},
        password: {type: String, required: true, min: 4},
        funcion: {type: Number}
});

module.exports = mongoose.model('Usuarios', Usuarios)