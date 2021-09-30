
const usuariosDao=require(`../dao/usuariosDao`);


const mostrar =async()=>{
    try{
        const usuarios=await usuariosDao.mostrar();
        return(usuarios);
    } catch(error){
        console.log(`error prueba(controller): ${error}`);
    }
};

module.exports={mostrar};