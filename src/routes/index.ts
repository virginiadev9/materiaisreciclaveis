import {Router} from 'express';
import itemsRoutes from './items.routes';
const routes = Router();

routes.get('',(request,response)=>{
    return response.json([
        { message:"Começando projeto com node"},
        {backend:"utilizando express,typescrit,knex"},
        {fronend:"utilizando Anguçlar"}
    ]);
});
routes.use('/items',itemsRoutes);//não esta sendo criada, esta usando então "routes.use"


export default routes;
