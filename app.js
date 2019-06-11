'use stric'

const express=require('express');
const  bodyParser=require('body-parser');

let app=express();

//cargar archivos rutas



//midelwares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS


//rutas
app.post('/test',(req, resp)=>{
    console.log(req.body)
    resp.status(200).send({
        name:"Rogelio Romero"
    }

    )
})
app.get('/',(req, resp)=>{
    resp.status(200).send(
"<h1>Hola</h1>",
    )
})
//exportar

module.exports=app;