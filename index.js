const app=require('./routes/app');
const usuariosRoutes=require('./routes/usuariosRoutes');


app.use('/usuarios',usuariosRoutes);