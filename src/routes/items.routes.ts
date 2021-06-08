import {Router} from 'express';
import connection from '../database/connection';

/**conection é um objeto knex, então pode utilizar os metodos dele */
const itemsRoutes = Router();
itemsRoutes.get('/',async(request,response)=>{                         //precisamos usar funt assyncrona para fazer o cod esperar a execução e puchar todos os items
    const items= await connection('items').select('*');
    const itemsSearialized = items.map(item=>{
        return {//esse retorno e da funçao anonima que usamos para item
            id:item.id,
            titulo:item.titulo,
            imagem_url:`http://localhost:3333/uploads/${item.imagem}`
        }
    });

    return response.json(itemsSearialized);
});
export default itemsRoutes;