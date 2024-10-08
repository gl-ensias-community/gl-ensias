//for pushing the table into the datbase
const { drizzle } = require("drizzle-orm/postgres-js");
const postgres = require("postgres");
const { migrate } = require("drizzle-orm/postgres-js/migrator");
require("dotenv/config");

const pushMigration = async () => {
  const migrationClient = postgres(process.env.DB_CONNECTION_STRING, {
    max: 1,
  });
  const migrationDB = drizzle(migrationClient);

  await migrate(migrationDB, {
    migrationsFolder: "./server/db/migrations/drizzle",
  });

  await migrationClient.end();
};

pushMigration();
