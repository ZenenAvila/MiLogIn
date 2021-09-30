const router = require('express').Router();
const usuariosController=require('../controllers/usuariosController');
//const { request, response } = require('./app');


//router.post('/',usuariosController);

router.get("/mostrartodos",async(request,response)=>{
    try{
        const usuarios=await usuariosController.mostrarTodos();
        response.json(usuarios);
    } catch(error){
        console.log(`error mostrartodos(routers): ${error}`);
    }
     
});

router.get("/mostrar",async(request,response)=>{
    try{
        const usuarios=await usuariosController.mostrar();
        response.json(usuarios);
    } catch(error){
        console.log(`error mostrar(routers): ${error}`);
    }
     
});

//insertar usuariosn
router.post('/insertar',async(request,response)=>{
    try{    
        const usuarios=await usuariosController.insertar(
            request.body.nombre,request.body.apellidos,
            request.body.password);
        response.json(usuarios);
    } catch(error){
        console.log(`error insertar(routers): ${error}`);
    }
});

router.post('/actualizar',async(request,response)=>{
    try{    
        const usuarios=await usuariosController.actualizar(
            request.body.id,request.body.nombre,
            request.body.apellidos,request.body.password);
        response.json(usuarios);
    } catch(error){
        console.log(`error actualizar(routers): ${error}`);
    }
});
 
router.post('/eliminar',async(request,response)=>{
    try{    
        const usuarios=await usuariosController.eliminar(
            request.body.id);
        response.json(usuarios);
    } catch(error){
        console.log(`error eliminar(routers): ${error}`);
    }
});


module.exports=router;