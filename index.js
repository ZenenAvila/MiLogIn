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
app.get('/api/mostrartodos',(request,response)=>{

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

app.get('/api/mostrar',(request,response)=>{

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
app.post('/api/insertar',(request,response)=>{
    pool.query(`insert into usuarios(nombre,apellidos,password)
                values('${request.body.nombre}',
                       '${request.body.apellidos}',
                       '${btoa(request.body.password)}');`
                ,(err,res)=>
        {
            if(err){
                response.json(err.stack);
            }else{
                response.json({"respuesta":"insertado Correctamente"});
            }
        });
});

//eliminar usuarios
app.post('/api/eliminar',(request,response)=>{
    pool.query(`update usuarios set eliminado=true 
    where id =${request.body.id}`,(err,res)=>
    {
        if(err){
            response.json(err.stack);
        }else{
            response.json({"respuesta":"eliminado Correctamente"});
        }
    });
});

//actualizar usuarios
app.post('/api/actualizar',(request,response)=>{
    pool.query(`update usuarios 
                set nombre='${request.body.nombre}',
                    apellidos='${request.body.apellidos}',
                    password = '${btoa(request.body.password)}'
                    where id=${request.body.id}`,(err,res)=>
    {
        if(err){
            response.json(err.stack);
        }else{
            response.json({"respuesta":"actualizado Correctamente"});
        }
    });
});

//Servidor escuchando
app.listen(port,()=>{
    console.log( `API corriendo en el puerto ${port}`);
});

// const pattern = new RegExp('^[A-Z]+$', 'i');
// if(pattern.test("Hoa1la")){ 
//     console.log("valido");
// }else{
//     console.log("invalido");

// }