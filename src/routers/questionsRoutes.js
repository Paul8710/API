import { Router } from 'express'
import { createQuestions, deleteQuestion, getAllQuestions } from '../controllers/questionsController.js'

const router = Router()

router.delete('/:id', deleteQuestion)

router.get('/', getAllQuestions)

router.post('/', createQuestions)

export default router