import mysql, { ConnectionOptions, RowDataPacket } from 'mysql2/promise';

export async function getMySqlConnection() {
    const access: ConnectionOptions = {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        port: parseInt(process.env.MYSQL_PORT as string),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        multipleStatements: true
    };
    
    const conn = mysql.createConnection(access);
    return conn;
}

export async function getToDos() {
    const conn = await getMySqlConnection();
    const result = await conn.query<RowDataPacket[]>('SELECT * FROM todos');
    return result;
}
