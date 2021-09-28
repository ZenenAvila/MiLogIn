
const express=require('express');
const { response } = require('express');
const app=express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

const port=process.env.PORT||5000;

app.get('/',(request,response)=>{
    response.json({info:'la API esta en ejecución'});
});

app.listen(port,()=>{
    console.log( `API corriendo en el puerto ${port}`);
});