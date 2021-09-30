const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.set('port',process.env.PORT||5000);

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

  app.get('/',(request,response)=>{
    response.json({info:'la API esta en ejecución'});
});

app.listen(app.get('port'),()=>{
    console.log( `API corriendo en el puerto ${app.get('port')}`);
});


module.exports=app;
