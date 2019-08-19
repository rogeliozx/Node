'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
let TaskSchema = schema({
    titulo: String,

    description: String,

    estado: Boolean,

    author: { type: 'ObjectId', ref: 'Users' }

});

module.exports = mongoose.model('Todo', TaskSchema);