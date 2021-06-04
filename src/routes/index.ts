import {Router} from 'express';

const routes = Router();

routes.get('',(request,response)=>{
    return response.json([
        { message:"Começando projeto com node"},
        {backend:"utilizando express,typescrit,knex"},
        {fronend:"utilizando Anguçlar"}
    ]);
});


export default routes;
