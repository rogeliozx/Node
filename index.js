'use strict'

let app=require('./app');
let port=4800;
async function conectando(){
    
let mongoose=require('mongoose');

mongoose.Promise=global.Promise;
let conecta= await mongoose.connect('mongodb://localhost:27017/Todo')
//crear servidor
app.listen(port,()=>{
    console.log(`servidor creado correctamente en puerto:${port}`)
})
 if(!conecta){
console.log("no establecida la conexion")

 }else if(conecta){
    console.log("establecida la conexion");
    
 }

}
conectando()