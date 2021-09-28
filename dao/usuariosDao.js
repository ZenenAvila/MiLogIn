////////////  Requerimientos ////////////
const { Pool } = require('pg');

const config={
    user: 'ilhzxelc',
    host: 'kashin.db.elephantsql.com',
    database:'ilhzxelc',
    password:'xKyzElRFw7DHX8WZelDW_mVq0zm2i073',
    port:5432,

};
const pool = new Pool(config);


const mostrarTodos = async (apiKey) =>{
    try{
        let usuarios = await 
        pool.query(`select * from usuarios 
        order by id asc; `);

        return usuarios

    } catch (error){
        console.log(`error mostrarTodos(dao): ${error}`)
    }
}

module.exports={mostrarTodos}