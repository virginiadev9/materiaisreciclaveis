import {Knex} from 'knex';

export async function seed(knex:Knex) { //metodo tem que ser asyncrono pq ele faz uma operação que leva um tempo para concluir
    await knex('items').insert([       //[] passamos um array de inserção
        { titulo:"Papéis e Papelão", imagem:"papel.png" },//id ja é criado automaticamente
        { titulo:"Vidros e Lâmpadas", imagem:"vidro.png" },
        { titulo:"Oléo de Cozinha", imagem:"oleo.png" },
        { titulo:"Residuos Organicos", imagem:"rorganico.png" },
        { titulo:"Eletrônicos", imagem:"eletronico.png" }
    ]);
}         