'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
let UsersSchema = schema({
    name: String,
    email:String,
    lastname: String,

    type: String,

    years: Number,

    password: String,

    image: String,
    boss:String,

});

module.exports = mongoose.model('Users', UsersSchema);
//el schema creas lo pluralisa Project -> Projects --lo crea si no existe
//si ya existe lo guarda ahi