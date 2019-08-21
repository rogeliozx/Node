const Task = require('../models/task');
const controllers={
ModifyTask: (req, res) => {
    let taskid = req.params.id;
    let update = req.body;

    Task.findByIdAndUpdate(taskid, update, { new: true }, (err, taskUpdate) => {
        if (err) return res.status(505).send({ message: 'pos valio verga :v' })
        if (!taskUpdate) return res.status(404).send({ mensage: 'no se encontro dato para actualizar' })
        return res.status(200).send({ project: taskUpdate })
    })
},
CreateTask: (req, res) => {
    let task = new Task();
 
    let params = req.body;
   
    task.titulo = params.titulo;
    task.description = params.description;
    task.estado = params.estado;
    task.boss = params.boss;
    task.email=params.email;
   
   
   
    task.save((err, taskStored) => {
        if (err) return res.status(500).send({ mensage: 'error en la peticion' })

        if (!taskStored) return res.status(404).send({ message: 'no se pudo guardar el proyecto' })
        return res.status(200).send({ task: taskStored })
    });

},
EliminateTask:(req,res)=>{
    let taskid = req.params.id;
    Task.findByIdAndDelete(taskid, (err, taskRemoved) => {
        if (err) return res.status(500).send({ message: 'Error en el proceso de borrado' })
        if (!taskRemoved) return res.status(404).send({ message: 'no se encontro registro' })
        return res.status(200).send({
            taskRemoved
        })
    })
},
GetTask:(req,res)=>{
    let taskId=req.params.id;
    console.log(taskId)
    if (taskId == null) return res.status(404).send({ mensage: 'mal envio solicitud' })
    Task.findById(taskId,(err, task)=>{
     if (err) return res.status(500).send({
         message: 'error en la solicitud'
     });
     if (!task) return res.status(404).send({
         mensage: 'el documento no existe'
     })
     return res.status(200).send({
        task
     })
    })
}
}
module.exports = controllers;