////////////  Requerimientos ////////////
const { Pool } = require('pg');

const morgan = require('morgan');

const express=require('express');
const app=express();

//const bodyParser = require('body-parser');

////////////  configuracion API ////////////
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const port=process.env.PORT||5000;

////////////  configuracion database ////////////

const config={
    user: 'ilhzxelc',
    host: 'kashin.db.elephantsql.com',
    database:'ilhzxelc',
    password:'xKyzElRFw7DHX8WZelDW_mVq0zm2i073',
    port:5432,

};
const pool = new Pool(config);

////////////  configuracion endpoint ////////////

app.get('/',(request,response)=>{
    response.json({info:'la API esta en ejecución'});
});

//consultar usuarios
app.get('/mostrartodos',(request,response)=>{

    pool.query(`select * from usuarios 
    order by id asc; `,(err,res)=>
    {
        if(err){
            response.json(err.stack);
        }else{
            response.json(res.rows);
        }
    });
});

var mostrar=`select id,nombre,apellidos,password
from usuarios where eliminado=false order by id asc;`;

app.get('/mostrar',(request,response)=>{

        pool.query(mostrar,(err,res)=>
        {
            if(err){
                response.json(err.stack);
            }else{
                response.json(res.rows);
            }
        });
});

//insertar usuariosn
app.get('/insertar',(request,response)=>{
    var contraseña = btoa("contraseña");
    pool.query(`insert into usuarios(nombre,apellidos,password)
                values('oliver','avila trani','${contraseña}');`
                ,(err,res)=>
        {
            if(err){
                response.json(err.stack);
            }else{
                response.json("Insertado Correctamente");
            }
        });
});

//eliminar usuarios
app.get('/eliminar',(request,response)=>{
    pool.query(`update usuarios set eliminado=true 
    where nombre ='oliver'`,(err,res)=>
    {
        if(err){
            response.json(err.stack);
        }else{
            response.json("Eliminado Correctamente");
        }
    });
});

//actualizar usuarios
app.get('/actualizar',(request,response)=>{
    pool.query(`update usuarios set password = 
    'prueba2' where nombre='bayron'`,(err,res)=>
    {
        if(err){
            response.json(err.stack);
        }else{
            response.json("actualizar Correctamente");
        }
    });
});

app.listen(port,()=>{
    console.log( `API corriendo en el puerto ${port}`);
});