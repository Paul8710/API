import { sqliteTable, text, integer} from 'drizzle-orm/sqlite-core'
import { randomUUID} from 'crypto'

export const questionsTable = sqliteTable('questions', {
    id: text().primaryKey().$defaultFn(() => randomUUID()),
    questionText: text('question_text', { length: 300 }).notNull(),
    answer: text({ length: 300}).notNull(),
    difficulty: text({ enum: ['easy', 'medium', 'difficult']})
    .notNull()
    .default('easy'),
    createdAt: integer('created_at', { mode: 'timestamp'})
    .notNull()
    .$defaultFn(() => new Date())
})