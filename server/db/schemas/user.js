const { pgTable, text, uuid } = require("drizzle-orm/pg-core");

const user = pgTable("users", {
    id: uuid("id").primaryKey(), 
    email: text("email").notNull().unique(),
    password: text("password").notLull()
});

module.exports = {
    user
};