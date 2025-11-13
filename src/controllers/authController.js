import { eq } from "drizzle-orm"
import bcrypt from 'bcrypt'
import { db } from "../db/database.js"
import { usersTable } from "../db/schema.js"
import {request, response} from 'express'

/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @returns 
 */
export const createUsers = async (req, res) => {
    const {email, username, password} = req.body
    //console.log(email, username, password)
    if (!email || !username || !password){
        return res.status(400).send({ error: 'Invalid request'})
    }
    
    try {
        let hashpassword = bcrypt.hashSync(password,12)
        const questions = await db.insert(usersTable).values({email: email, username: username, password: hashpassword}).returning({email: usersTable.email, username: usersTable.username, id: usersTable.id})
        res.status(200).json({message:'Good', userData: questions, token: 'TOKEN'})
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Pas pu inserer",
        })
    }
}
