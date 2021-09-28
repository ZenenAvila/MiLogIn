const {Router, response} =require('express');
const router=Router();
const usuariosDao=require(`../dao/usuariosDao`);

router.get("/mostrartodos",(req,res)=>{
    try{
        const usuarios=usuariosDao.mostrarTodos
        res.send("usuarios");
    } catch(error){
        console.log(`error mostrarTodos(controller): ${error}`);
    }
     
});

module.exports=router;