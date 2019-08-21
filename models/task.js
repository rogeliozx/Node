'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
let TaskSchema = schema({
    titulo: String,

    description: String,

    estado: Boolean,

    boss:String,

    email:String,//aqui pasare el id por string del usuario se le asigno

});

module.exports = mongoose.model('Task', TaskSchema);