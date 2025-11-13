import { Router } from 'express'
import { validateBody, validateParams } from '../middleware/validation.js'
import { createUserSchema } from '../models/auth.js'
import { createUsers } from '../controllers/authController.js'

const router = Router()

router.post('/register', validateBody(createUserSchema), createUsers)

export default router