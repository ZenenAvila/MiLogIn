////////////  configuracion database ////////////
const { Pool } = require('pg');
const config={
    user: 'ilhzxelc',
    host: 'kashin.db.elephantsql.com',
    database:'ilhzxelc',
    password:'xKyzElRFw7DHX8WZelDW_mVq0zm2i073',
    port:5432,

};
const pool = new Pool(config);
////////////  configuracion consultas ////////////



const getUsuarios= async ()=>{
    try {
        const res = await pool.query('select * from usuarios');
    console.log(res.rows);
    pool.end();
    } catch (error) {
        console.log(error);
    }
}

getUsuarios();

//console.log(getUsuarios());