import { Router } from 'express'
import { createQuestions, deleteQuestion, getAllQuestions } from '../controllers/questionsController.js'
import logger from '../middleware/logger.js'
import { validateBody } from '../middleware/validation.js'
import { questionIdSchema } from '../models/question.js'

const router = Router()

router.delete('/:id', deleteQuestion)
router.get('/', logger, getAllQuestions)
router.post('/',validateBody(questionIdSchema), createQuestions)

export default router