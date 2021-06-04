import knex from 'knex';

const connection = knex({
    client: 'pg',
    version: '8.6.0',
    connection: {
    host : '127.0.0.1', //<--adicionar esta linha
    user : 'postgres',
    password : 'postgres',
    database : 'myapp_test',
    port: 5432
  }
});

export default connection;