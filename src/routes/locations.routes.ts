import {Router} from 'express';
import connection from '../database/connection';

const locationsRoutes = Router();

locationsRoutes.post('/',async(request,response)=>{
    const {name,image,email,whatsapp,latitude,longitude,cidade,uf,items} = request.body;
    // inializamos a transação
    const transaction = await connection.transaction();

        const location = {image:'fake-image.jpg',name,email,whatsapp,latitude,longitude,cidade,uf,
        items};
        
        const newIds= await transaction('locations').insert(location); 
        
        const locationID = newIds[0];


        //#resolve inserção na tabela pivoo também
        const locations_it = items.map(async(item_id:number)=>{
            const selecttedItem = await transaction('items').where('id',item_id).first();
            if(!selecttedItem){
                return response.status(400).json({message:'Item que informou não encontrado ou não existe.'});
            }
            return {
                item_id,
                locations_id:locationID
            }
        });
        await transaction("locations_items").insert(locations_it);
    // damos o commit
    await transaction.commit();

    
    return response.json({
        id :locationID,
        ...location                         //spred operator
    });
});
locationsRoutes.get('/:id',async(request,response)=>{
    const { id } = request.params;
    const location = await connection('locations').where('id',id).first();//first serve pra pegar so 1 e não uym array
    if(!location){
        return response.status(400).json({message:'Location not faund'});
    }
    const items = await connection('items').join('locations_items','items.id','=','locations_items.items_id').where('locations_items.locations_id',id).
    select('items.titulo');

    return response.json({location,items});
});
export default locationsRoutes;
