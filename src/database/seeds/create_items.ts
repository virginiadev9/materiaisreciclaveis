import {Knex} from 'knex';

export async function seed(knex:Knex) { //metodo tem que ser asyncrono pq ele faz uma operação que leva um tempo para concluir
    await knex('items').insert([       //[] passamos um array de inserção
        { titulo:"Papéis e Papelão", imagem:"papel.svg" },//id ja é criado automaticamente
        { titulo:"Vidros e Lâmpadas", imagem:"vidro.svg" },
        { titulo:"Oléo de Cozinha", imagem:"oleo.svg" },
        { titulo:"Residuos Organicos", imagem:"organico.svg" },
        { titulo:"Eletrônicos", imagem:"eletronico.svg" }
    ]);
}         