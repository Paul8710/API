import express from 'express'
import todosRouter from './routers/todosroute.js'

const port = process.env.PORT || 3000;

const app = express()

app.use(express.json())

app.use('/todos',todosRouter)

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
})