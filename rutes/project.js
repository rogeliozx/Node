'use strict'
const express=require('express');
const ProjectControlador=require('../controllers/project');
const Acounts=require('../controllers/Acounts');

let multipart=require('connect-multiparty');
let multpartMiddleware=multipart({uploadDir:'./uploads'});

let router=express.Router();


// User login and sigup rutes
router.get('/login', Acounts.Login);
router.post('/save-user',Acounts.saveUser);//guardo usuario signup
//user crud admin
router.get('/user/:id?',ProjectControlador.GetUser)



router.get('/project/:id?',ProjectControlador.getProject);
router.get('/all',ProjectControlador.getAll);
router.put('/edit/:id',ProjectControlador.pushUpdate);
router.delete('/del/:id',ProjectControlador.beDelete);
router.post('/upload-image/:id',multpartMiddleware,ProjectControlador.uploadImage);
router.get('/imagenes/:image',ProjectControlador.getImage);
module.exports=router;