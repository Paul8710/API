import { eq } from "drizzle-orm"
import { db } from "../db/database.js"
import { questionsTable } from "../db/schema.js"

export const getAllQuestions = async (req, res) =>{
    try {
        const questions = await db.select().from(questionsTable).orderBy('createdAt', 'desc')
        res.status(200).json(questions)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Failed to fetch questions",
        })
    }
}

export const createQuestions = async (req, res) => {
    const {questionText, answer, difficulty} = req.body
    console.log(questionText, answer, difficulty)
    if (!questionText || !answer || !difficulty){
        return res.status(400).send({ error: 'Invalid request'})
    }
    
    try {
        const questions = await db.insert(questionsTable).values(req.body).returning()
        res.status(200).json(questions)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Pas pu inserer",
        })
    }
}

export const deleteQuestion = async (req, res) =>{
    const { id } = req.params
    try {
        const questions = await db.delete(questionsTable).where(eq(questionsTable.id, id)).returning();
        res.status(200).json(questions)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Pas pu supprimer",
        })
    }
}