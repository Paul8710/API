import express from 'express'
import questionsRouter from './routers/questionsRoutes.js'
import usersRouter from './routers/usersRoutes.js'
import authRouter from './routers/authRoutes.js'
import logRouter from './routers/logRoutes.js'
import logger from './middleware/logger.js';

const port = process.env.PORT || 3000;

const app = express()

app.use(express.json())
app.use(logger)

app.use('/questions', questionsRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)
app.use('/login', logRouter)

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
})

