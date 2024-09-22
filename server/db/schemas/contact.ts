import { pgTable, serial,text,timestamp } from "drizzle-orm/pg-core";
//if you did 'contact' instead  of "contact" this won't work
export const contact = pgTable("contact",{
    id: serial('id').primaryKey(),
    name: text('username').notNull(),
    email: text('email').notNull(),
    message: text('message').notNull(),
    created_at: timestamp('created_at').defaultNow(),
}
);

export type Contact= typeof contact.$inferSelect;