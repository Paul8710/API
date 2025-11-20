import { Router } from 'express'
import { validateBody, validateParams } from '../middleware/validation.js'
import { createUserSchema, loginUserSchema } from '../models/auth.js'
import { loginUser } from '../controllers/loginController.js'

const router = Router()

router.post('/', validateBody(loginUserSchema), loginUser)

export default router