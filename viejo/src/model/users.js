'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
let UsersSchema = schema({
    name: String,

    lastname: String,

    type: String,

    years: Number,

    password: String,

    image: String,

});

module.exports = mongoose.model('Users', UsersSchema);