import path from 'path';

module.exports = {
    client: 'pg',
    version: '7.2',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'postgres',
        database : 'myapp_test'
    },
    migrations: {
        directory: path.resolve(__dirname,'src','database','migrations')
    }
}