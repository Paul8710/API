import { z } from 'zod'

const difficultyEnum = z.enum(["easy","medium","difficult"])

const createQuestionSchema = z.object({
    questionText: z.string()
    .min(1, 'Question text is required')
    .max(300, 'Question text must be at most 300 characters'), 
    answer: z.string()
    .min(1, 'Answer text is required')
    .max(300,'Answer text must be at most 300 characters'),
    difficulty: difficultyEnum
})

export const questionIdSchema = z.object({
    id: z.uuid(),
})