'use stric'

const express=require('express');
const  bodyParser=require('body-parser');
const cors =require('cors');
let app=express();


//cargar archivos rutas
let ProjectRutes=require('./rutes/project');
//midelwares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())

//Configurar cabeceras y cors


//rutas
app.use('/api',ProjectRutes);
//exportar
module.exports=app;

