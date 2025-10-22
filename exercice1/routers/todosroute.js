import { Router } from 'express'
import { addTodos } from '../controllers/todosController.js'

const router = Router()

router.post('/', addTodos)

export default router