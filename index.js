////////////  Requerimientos ////////////
const { Pool } = require('pg');

const morgan = require('morgan');

const express=require('express');
const { response } = require('express');
const app=express();

const numeros = new RegExp('^[0-9]+$');
const letras = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');

////////////  configuracion API ////////////
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

const port=process.env.PORT||5000;


app.get('/',(request,response)=>{
    response.json({info:'la API esta en ejecución'});
});


app.use(require('./controllers/usuariosController'))


//Servidor escuchando
app.listen(port,()=>{
    console.log( `API corriendo en el puerto ${port}`);
});