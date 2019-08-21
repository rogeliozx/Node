'use strict'
const Users = require('../models/Users');
 const fs = require('fs');
const path=require('path');

const controller = {
    GetUser: (req, res) => {
      
       let userId=req.params.id;
    
       if (userId == null) return res.status(404).send({ mensage: 'existe' })
       Users.findById(userId,(err, user)=>{
          
        if (err) return res.status(500).send({ message: 'error en la solicitud'});
     
        if (!user) return res.status(404).send({ mensage: 'el documento no existe' })
        return res.status(200).send({user})
       })
    },getAllAdmin: (req , res) => {

        //acomdando por orden alfabetico sigue aqui para obtener usuario 
        //por jefe tiene asignado  
      
        Users.find({boss:req.params.email}).exec((err, users) => {
           
            if (err) return res.status(500).send({ mensage: 'fallo en la consulta' });
            if (!users) return res.status(404).send({ mensage: 'error 404 no found' });
            return res.status(200).send({ users });
        });
    },
   
    getProject: (req, res) => {
        let projectId = req.params.id;
        console.log(projectId)
        if (projectId == null) return res.status(404).send({ mensage: 'el documento no existe' })

        Project.findById(projectId, (err, project) => {
            if (err) return res.status(500).send({ message: 'error en la solicitud'});
           
            if (!project) return res.status(404).send({ mensage: 'el documento no existe'});
            return res.status(200).send({
                project
            })
        })
    },
    
    UserUpdate: (req, res) => {
        let userid = req.params.id;
        let update = req.body;
console.log(update);
        Users.findByIdAndUpdate(userid, update, { new: true }, (err, userUpdate) => {
            
            if (err) return res.status(505).send({ message: 'fallo envio' })
            if (!userUpdate) return res.status(404).send({ mensage: 'no se encontro dato para actualizar' })
            return res.status(200).send({ user: userUpdate })
        })
    },
    UserBeDelete: (req, res) => {
        let usertid = req.params.id;
        Users.findByIdAndDelete(usertid, (err, UserRemoved) => {
            if (err) return res.status(500).send({ message: 'Error en el proceso de borrado' })
            if (!UserRemoved) return res.status(404).send({ message: 'no se encontro registro' })
            return res.status(200).send({
                UserRemoved
            })
        })
    } ,
    uploadImage: (req, res) => {
        let userId = req.params.id;
        let fileName = 'Imagen No subida';
        if (req.files) {
            let filepath = req.files.image.path
            let fileSplith = filepath.split('\\');
            let fileName = fileSplith[1];
            let exSplit = fileName.split('\.');
            let fileExt = exSplit[1];
            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                Users.findByIdAndUpdate(userId, { image: fileName }, { new: true }, (err, userupdate) => {
                    if (err) return res.status(200).send({ mensage: 'el Archivo de imagen no pudo subirse' })
                    if (!userupdate) return res.status(404).send({ mensage: 'No existe la imagen o proyecto' })

                    return res.status(200).send({
                        user: userupdate
                    })
                })
            } else {
                fs.unlink(filepath, (err) => {
                    return res.status(200).send({
                        mensage: 'la extension no es valida'
                    })
                })

            }


        } else {
            return res.status(200).send({
                message: fileName
            })
        }
    },
    getImage:(req,res)=>{
         
        let file=req.params.image;
        console.log(file);
       let path_file='./uploads/'+file;
    
         fs.exists(path_file,(exists)=>{
          
          if(exists){
           
             return res.sendFile(path.resolve(path_file));
        }else{
            return res.status(200).send({
                message:'no existe la imagen'
            })
        }
        })
    } 
}
module.exports = controller;