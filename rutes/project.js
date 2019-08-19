'use strict'
const express=require('express');
const ProjectControlador=require('../controllers/project');
let multipart=require('connect-multiparty');
let multpartMiddleware=multipart({uploadDir:'./uploads'});

let router=express.Router();
console.log(ProjectControlador.saveProject);

router.get('/home',ProjectControlador.home)
router.post('/signup', ProjectControlador.test);
router.post('/save-user',ProjectControlador.saveUser);
router.get('/project/:id?',ProjectControlador.getProject);
router.get('/all',ProjectControlador.getAll);
router.put('/edit/:id',ProjectControlador.pushUpdate);
router.delete('/del/:id',ProjectControlador.beDelete);
router.post('/upload-image/:id',multpartMiddleware,ProjectControlador.uploadImage);
router.get('/imagenes/:image',ProjectControlador.getImage);
module.exports=router;