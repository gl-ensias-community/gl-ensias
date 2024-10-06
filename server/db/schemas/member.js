const { pgTable, serial, text, timestamp, uuid } = require("drizzle-orm/pg-core");

const member = pgTable("member", {
    id: serial('id').primaryKey(),
    user_id: uuid('user_id').notNull().references('user.id'),
    name: text('name').notNull(),
    year: text('year').notNull(),
    created_at: timestamp('created_at').defaultNow(),
});

module.exports = {
    member
};