import {Knex} from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('locations_items',table=>{//createtable recebe o nome de parametro e os atributos
        table.increments('id').primary();
        table.integer('locations_id').notNullable();//qual campo na locations que esse esta se referenciando
        table.integer('items_id').notNullable();
        //....
        table.foreign('locations_id').references('locations.id');
        table.foreign('items_id').references('items.id');
    });
}
export async function down(knex:Knex) {
    return knex.schema.dropTable('locations_items');
}