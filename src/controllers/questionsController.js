export const getAllQuestions = (req, res) =>{
    res.status(200).send([
        {
            id: 1,
            question: "Quelle est la capitale de la France ?",
            answer: 'Paris',
        }
    ])
}

export const createQuestions = (req, res) => {
    const {question, answer} = req.body
    if (!question || !answer){
        return res.status(400).send({ error: 'Invalid request'})
    }
    res.status(201).send({ message: 'Question Created'})
}

export const deleteQuestion = (req, res) =>{
    const { id } = req.params
    res.status(200).send({ message: `Question ${id} deleted`})
}