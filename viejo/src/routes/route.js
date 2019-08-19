'use strict'
const express=require('express');
const TaskControlador=require('../controllers/task');
const UsersControlador=require('../controllers/users.js');
//const multipart=require('connect-multiparty');
//const multpartMiddleware=multipart({uploadDir:'./uploads'});

let router=express.Router();


router.get('/users',UsersControlador.CreateUser)
router.post('/signup',UsersControlador.CreateUser);
router.put('/edit-user/:id',);
router.delete('/del-user/:id',);
//ruter of task
router.post('/save-task',);
router.get('/task/:id?',);
router.get('/all-task',);
router.put('/edit-task/:id',);
router.delete('/del-task/:id',);
router.post('/upload-image/:id',);
router.get('/imagenes/:image',);
module.exports=router;