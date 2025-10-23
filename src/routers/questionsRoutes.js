import { Router } from 'express'
import { createQuestions, deleteQuestion, getAllQuestions } from '../controllers/questionsController.js'
import logger from '../middleware/logger.js'
import { validateBody, validateParams } from '../middleware/validation.js'
import { questionIdSchema, createQuestionSchema } from '../models/question.js'

const router = Router()

router.delete('/:id', validateParams(questionIdSchema), deleteQuestion)
router.get('/', logger, getAllQuestions)
router.post('/',validateBody(createQuestionSchema), createQuestions)

export default router