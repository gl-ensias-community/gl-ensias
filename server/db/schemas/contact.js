const { pgTable, serial, text, timestamp } = require("drizzle-orm/pg-core");

const contact = pgTable("contact", {
    id: serial('id').primaryKey(),
    name: text('username').notNull(),
    email: text('email').notNull(),
    message: text('message').notNull(),
    created_at: timestamp('created_at').defaultNow(),
});

module.exports = {
    contact
};