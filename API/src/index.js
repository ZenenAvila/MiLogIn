const express = require('express');
const app=express();
const morgan= require('morgan')

// middlewares
app.use(morgan('dev'))

//empezando seridor
app.listen(5000,()=>{
console.log(`server en puerto ${5000}`);

})