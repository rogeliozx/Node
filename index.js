'use strict'

let app=require('./app');
let port=4800;
async function conectando(){
    
let mongoose=require('mongoose');

mongoose.Promise=global.Promise;
let conecta= await mongoose.connect('mongodb://localhost:27017/portafolio')
//crear servidor
app.listen(port,()=>{
    console.log(`servidor creado correctamente en puerto:${port}`)
})
await console.log("conexion establecida");
}
conectando()