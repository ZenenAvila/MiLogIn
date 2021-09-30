////////////  Requerimientos ////////////
const { pool } = require('../db/conection');


const mostrarTodos = async () =>{
    try{
        const usuarios = await pool.query(`select * from usuarios 
        order by id asc;`);
        return usuarios.rows;

    } catch (error){
        console.log(`error mostrarTodos(dao): ${error}`);
    }
}

const mostrar = async () =>{
    try{
        const usuarios = await pool.query(`select id,nombre, 
        apellidos,password from usuarios where eliminado=false 
        order by id asc;`);
        return usuarios.rows;

    } catch (error){
        console.log(`error mostrar(dao): ${error}`);
    }
}

const insertar =async (nombre,apellidos,password) =>{
    try{
        await pool.query(`insert into usuarios
        (nombre,apellidos,password)
                values('${nombre}',
                       '${apellidos}',
                       '${btoa(password)}');`);
    }
    catch(error)
    {
        console.log(`error insertar(dao): ${error}`);
    }
}

const eliminar = async(id)=>{
    try{
        await pool.query(`update usuarios set eliminado=true 
        where id =${id}`);
    
    } catch(error)
    {
        console.log(`error eliminar(dao): ${error}`);    
    }
}

const actualizar = async(id,nombre,apellidos,password)=>{
    try{
        await pool.query(`update usuarios 
                set nombre='${nombre}',
                    apellidos='${apellidos}',
                    password = '${btoa(password)}'
                    where id=${id}`);
    }catch(error)
    {
        console.log(`error actualizar(dao): ${error}`);    
    }
}

module.exports={mostrarTodos,mostrar,insertar,eliminar,actualizar};