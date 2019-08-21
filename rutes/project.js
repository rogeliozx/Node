'use strict'
const express=require('express');
const Users=require('../controllers/project');
const Acounts=require('../controllers/Acounts');
const Task=require('../controllers/Task');
const multipart=require('connect-multiparty');
const multpartMiddleware=multipart({uploadDir:'./uploads'});

let router=express.Router();


// User login and sigup rutes
router.post('/login', Acounts.Login);
router.post('/save-user',Acounts.saveUser);//guardo usuario signup
//user crud admin
router.get('/user/:id?',Users.GetUser)//ruta obtener usuarios
router.get('/admin-all/:email?',Users.getAllAdmin);//obtengo todos los usuarios asignados al admin

//crear tareas,modificar, eliminar,obtener
router.post('/create-task',Task.CreateTask);//👌
router.get('/task/:id',Task.GetTask);//👌
router.delete('/task/:id',Task.EliminateTask);//👌
router.put('/task/:id',Task.ModifyTask);//👌
//usuarios
router.put('/edit/:id',Users.UserUpdate);
router.delete('/del/:id',Users.UserBeDelete);

router.post('/upload-image/:id',multpartMiddleware,Users.uploadImage);
 router.get('/imagenes/:image',Users.getImage);
//eliminar usuarios
module.exports=router;