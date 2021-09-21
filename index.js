////////////  configuracion API ////////////

const { Pool } = require('pg');

const express=require('express');
const app=express();
const bodyParser = require('body-parser');

const port=process.env.PORT||5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));


////////////  configuracion database ////////////

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
        pool.connect();
        const res = await pool.query('select * from usuarios');
    //console.log(res.rows);
    pool.end();
    return res;
    } catch (error) {
        console.log(error);
    }
}

const insertUsuarios=async()=>{
    try {
        pool.connect();
    const text=`insert into usuarios(nombre,apellidos,password) 
    values('isis','avila aguirre','prueba')`;

    const res = await pool.query(text)
    // console.log(res);
    pool.end();
    return res;

    } catch (error) {
        console.log(error);
    }
}

const deleteUsuarios= async()=>{
    try {
        const text = `delete from usuarios where nombre ='zenen'  `    
    const res = await pool.query(text);
    // console.log(res);
    pool.end();
    return res;

    } catch (error) {
        console.log(error);
    }
}
const updateUser=async()=>{
    try {
        const text=`update usuarios set password = 'prueba2' where
    nombre='adolfo'`
    const res= pool.query(text);
    //console.log(res);
    pool.end();
    return res;

    } catch (error) {
        console.log(error)
    }
}


////////////  configuracion endpoint ////////////

app.get('/',(request,response)=>{
    response.json({info:'la API esta en ejecución'});
});

//consultar usuarios
app.get('/mostrar',(request,response)=>{
    const res=getUsuarios();
    response.json({info:res});
});

//insertar usuarios
app.get('/insertar',(request,response)=>{
    const res=insertUsuarios();
    response.json({info:res});
});

//eliminar usuarios
app.get('/eliminar',(request,response)=>{
    const res=deleteUsuarios();
    response.json({info:res});
});

//actualizar usuarios
app.get('/actualizar',(request,response)=>{
    const res=updateUser();
    response.json({info:res});
});

app.listen(port,()=>{
    console.log( `API corriendo en el puerto ${port}`);
});