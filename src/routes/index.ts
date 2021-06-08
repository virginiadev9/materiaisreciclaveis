import {Router} from 'express';
import itemsRoutes from './items.routes';
import locationsRoutes from './locations.routes';

const routes = Router();

routes.get('',(request,response)=>{
    return response.json([
        { message:"Começando projeto com node"},
        {backend:"utilizando express,typescrit,knex"},
        {fronend:"utilizando Anguçlar"}
    ]);
});
routes.use('/items',itemsRoutes);//não esta sendo criada, esta usando então "routes.use"
routes.use('/locations',locationsRoutes);


export default routes;
