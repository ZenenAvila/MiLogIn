const {Router, response} =require('express');

const morgan = require('morgan');
const router=Router();
const usuariosDao=require(`../dao/usuariosDao`);
const express=require('express');
const app=express();


const numeros = new RegExp('^[0-9]+$');
const letras = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

//consultar usuarios
router.get("/api/mostrartodos",async(req,res)=>{
    try{
        const usuarios=await usuariosDao.mostrarTodos();
        res.json(usuarios);
    } catch(error){
        console.log(`error mostrarTodos(controller): ${error}`);
    }
     
});

router.get("/api/mostrar",async(req,res)=>{
    try{
        const usuarios=await usuariosDao.mostrar();
        res.json(usuarios);
    } catch(error){
        console.log(`error mostrar(controller): ${error}`);
    }
     
});

//insertar usuariosn
router.post('/api/insertar',async(req,resp)=>{
    try{
    if(letras.test(req.body.nombre) & 
    letras.test(req.body.apellidos)){
       await usuariosDao.insertar(req.body.nombre,
            req.body.apellidos,req.body.password);
        resp.json({"respuesta":"insertado Correctamente"});
    }
    else{
        resp.json({"respuesta":"El nombre y apellidos deben contener solo letras "});
    }
    } catch(error){
        console.log(`error insertar(controller): ${error}`);
    }
});
 
app.post('/api/eliminar',async(req,resp)=>{
    if(numeros.test(req.body.id)){
        await usuariosDao.eliminar(req.body.id);
    } else{
        response.json({"respuesta":"El id solo debe contener numeros "});
    }
});

module.exports=router;