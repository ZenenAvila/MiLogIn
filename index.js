const app=require('./routes/app');
const usuariosRoutes=require('./routes/usuariosRoutes');

/////////////////cors
const cors=require('cors');
app.use(cors());

app.use('/usuarios',usuariosRoutes);