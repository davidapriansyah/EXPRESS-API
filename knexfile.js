require("dotenv").config();

console.log("Database Config:", process.env.DB_HOST, process.env.DB_PORT);

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 5432,
      database: process.env.DB_NAME || "postgres",
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "postgres"
    },
    migrations: {
      directory: "./migrations/tables"
    },
    seeds: {
      directory: "./migrations/seeds"
    }
  }
};
