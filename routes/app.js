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
    res.header('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Origin,Accept,Authorization,x-access-token');
	res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.get('/',(request,response)=>{
    response.json({info:'la API esta en ejecución'});
});

app.listen(app.get('port'),()=>{
    console.log( `API corriendo en el puerto ${app.get('port')}`);
});


module.exports=app;