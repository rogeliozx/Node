'use strict'

const mongoose=require('mongoose');
const schema=mongoose.Schema;
let ProjectSchema=schema({
name:String,
description:String,
category:String,
year:Number,
langs:String,
image:String,
});

module.exports=mongoose.model('Project',ProjectSchema);
//el schema creas lo pluralisa Project -> Projects --lo crea si no existe
//si ya existe lo guarda ahi