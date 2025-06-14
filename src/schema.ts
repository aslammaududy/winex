import { pgTable, serial, varchar, integer } from 'drizzle-orm/pg-core'

export const folders = pgTable('folders', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    parentId: integer('parent_id'),
})
