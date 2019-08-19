'use strict'
const Users = require('../models/Users');
const fs = require('fs');
const path=require('path');
let controller = {
    home: (req, res) => {
        return res.status(200).send({
            message: 'soy la home'
        })
    },
    test: (req, res) => {
        return res.status(200).send({
            message: 'soy la test'
        })
    },
    saveUser: (req, res) => {
        let user = new Users();
     
        let params = req.body;
       
        user.name = params.name;
        user.lastname = params.lastname;
        user.type = params.type;
        user.years = params.years;
        user.password = params.password;
        user.image = null
       
       
        user.save((err, userStored) => {
            if (err) return res.status(500).send({ mensage: 'error en la peticion' })

            if (!userStored) return res.status(404).send({ message: 'no se pudo guardar el proyecto' })
            return res.status(200).send({ user: userStored })
        });

    },
    getProject: (req, res) => {
        let projectId = req.params.id;
        console.log(projectId)
        if (projectId == null) return res.status(404).send({ mensage: 'el documento no existe' })

        Project.findById(projectId, (err, project) => {
            if (err) return res.status(500).send({
                message: 'error en la solicitud'
            });
            if (!project) return res.status(404).send({
                mensage: 'el documento no existe'
            })
            return res.status(200).send({
                project
            })
        })
    },
    getAll: (req = null, res) => {
        Project.find({}).sort('+year').exec((err, projects) => {
            if (err) return res.status(500).send({ mensage: 'hola oscar :v' });
            if (!projects) return res.status(404).send({ mensage: 'error 404' });
            return res.status(200).send({ projects });
        });
    },
    pushUpdate: (req, res) => {
        let projectid = req.params.id;
        let update = req.body;

        Project.findByIdAndUpdate(projectid, update, { new: true }, (err, projectUpdate) => {
            if (err) return res.status(505).send({ message: 'pos valio verga :v' })
            if (!projectUpdate) return res.status(404).send({ mensage: 'no se encontro dato para actualizar' })
            return res.status(200).send({ project: projectUpdate })
        })
    },
    beDelete: (req, res) => {
        let projectid = req.params.id;
        Project.findByIdAndDelete(projectid, (err, projectRemoved) => {
            if (err) return res.status(500).send({ message: 'Error en el proceso de borrado' })
            if (!projectRemoved) return res.status(404).send({ message: 'no se encontro registro' })
            return res.status(200).send({
                projectRemoved
            })
        })
    },
    uploadImage: (req, res) => {
        let projectId = req.params.id;
        let fileName = 'Imagen No subida';
        if (req.files) {
            let filepath = req.files.image.path
            let fileSplith = filepath.split('\\');
            let fileName = fileSplith[1];
            let exSplit = fileName.split('\.');
            let fileExt = exSplit[1];
            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                Project.findByIdAndUpdate(projectId, { image: fileName }, { new: true }, (err, projectupdate) => {
                    if (err) return res.status(200).send({ mensage: 'el Archivo de imagen no pudo subirse' })
                    if (!projectupdate) return res.status(404).send({ mensage: 'No existe la imagen o proyecto' })

                    return res.status(200).send({
                        project: projectupdate
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
       console.log(path_file)
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