const usuariosDao=require(`../dao/usuariosDao`);

const numeros = new RegExp('^[0-9]+$');
const letras = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');

//consultar usuarios
const mostrarTodos =async()=>{
    try{
        const usuarios=await usuariosDao.mostrarTodos();
        return usuarios;
    } catch(error){
        console.log(`error mostrarTodos(controller): ${error}`);
    }
};

const mostrar =async()=>{
    try{
        const usuarios=await usuariosDao.mostrar();
        return usuarios;
    } catch(error){
        console.log(`error mostrar(controller): ${error}`);
    }
};

//insertar usuariosn
const insertar = async(nombre,apellidos,password)=>{
    try{
        if(nombre & apellidos & password)
        {
    if(letras.test(nombre) & letras.test(apellidos)
    ){
       await usuariosDao.insertar(nombre,apellidos,password);
        return({"respuesta":"insertado Correctamente"});
    }
    else{
        return({"respuesta":"El nombre y apellidos deben contener solo letras "});
    }
}else{
    return({"respuesta":"Todos los campos son obligatorios "});
    
}
    } catch(error){
        console.log(`error insertar(controller): ${error}`);
    }
};
 
const eliminar =async(id)=>{
    try{
        if(id)
        {
    if(numeros.test(id)){
        await usuariosDao.eliminar(id);
        return ({"respuesta":"eliminado Correctamente"});

    } else{
        return({"respuesta":"El id solo debe contener numeros "});
    }
}else{
    return({"respuesta":"El id es obligatorio "});

}
}
catch(error)
{
    console.log(`error eliminar(controller): ${error}`);
}
};

const actualizar=async(id,nombre,apellidos,password)=>{
    try{
        if(id & nombre & apellidos & password ){
    if(numeros.test(id)){    
    if(letras.test(nombre) & 
    letras.test(apellidos)){
    await usuariosDao.actualizar(id,nombre,apellidos,password)
        return({"respuesta":"actualizado Correctamente"});
}
else{
    return({"respuesta":"El nombre y apellidos deben contener solo letras "});
}
} else{
    return({"respuesta":"El id solo debe contener numeros "});
}}else{
    return({"respuesta":"Todos los campos son obligatorios "});
}}
catch(error)
{
    console.log(`error actualizar(controller): ${error}`);
    
}
};

module.exports={mostrarTodos,mostrar,insertar,actualizar,eliminar};