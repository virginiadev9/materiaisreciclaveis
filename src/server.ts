import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();
app.use(routes);
//configurando rota estatica no node 
app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')));

app.listen(3333,()=>{
    console.log("Api rodando ...");
});