import {Router} from 'express';
import connection from '../database/connection';

const locationsRoutes = Router();

locationsRoutes.post('/',async(request,response)=>{//post, vamos criar, entao vamos receber do request.body as infos e criar no bd
    const {name,image,email,whatsapp,latitude,longitude,cidade,uf,items} = request.body;
    
    const location = {image:'fake-image.jpg',name,email,whatsapp,latitude,longitude,cidade,uf,
    items};//no resto name=name,email=email entao nem precisa colocar o types crit ja reconhece(é uma propriedade que typescript tem)
    
    const newIds= await connection('locations').insert(location); //newIds é um array -> esta o retorno do id do objeto que foi colocado no banco de dados;
    
    const locationID = newIds[0];


    //#resolve inserção na tabela pivoo também
    const locations_it = items.map((item_id:number)=>{
        return {
            item_id,
            locations_id:locationID
        }
    });
    await connection("locations_items").insert(locations_it);
    return response.json({
        id :locationID,
        ...location                         //spred operator
    });
});
export default locationsRoutes;
