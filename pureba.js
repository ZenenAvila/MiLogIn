
const express=require('express');
const app=express();
const bodyParser = require('body-parser');

const port=5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/',(request,response)=>{
    response.json({info:'la API esta en ejecución'});
});

app.listen(port,()=>{
    console.log( `API corriendo en el puerto ${port}`);
});