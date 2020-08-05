import knex from 'knex';
import path from 'path'

const databaseConfig: knex.Config = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
}

const connection = knex(databaseConfig);
export default connection;
