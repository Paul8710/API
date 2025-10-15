import express from 'express'

const port = process.env.PORT || 3000;

const app = express()

app.use(express.json())

app.get('/questions', (req, res) =>{
    res.status(200).send([
        {
            id: 1,
            question: "Quelle est la capitale de la France ?",
            answer: 'Paris',
        }
    ])
})

app.post('/questions', (req, res) => {
    const {question, answer} = req.body
    if (!question || !answer){
        return res.status(400).send({ error: 'Invalid request'})
    }
    res.status(201).send({ message: 'Question Created'})
})

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
})

