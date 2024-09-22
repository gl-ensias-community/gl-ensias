const { drizzle } = require('drizzle-orm/postgres-js');
const postgres = require('postgres');

const client = postgres(process.env.DB_CONNECTION_STRING);
const db = drizzle(client);

module.exports = db;