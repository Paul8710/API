import { eq } from "drizzle-orm"
import bcrypt from 'bcrypt'
import { db } from "../db/database.js"
import { usersTable } from "../db/schema.js"
import {request, response} from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

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
        const User = await db.insert(usersTable).values({email: email, username: username, password: hashpassword}).returning({email: usersTable.email, username: usersTable.username, id: usersTable.id})
        
        const token = jwt.sign({ userId: User.id}, process.env.JWT_SECRET, { expiresIn: '24h'})
        
        res.status(201).json({
            message:'Good', 
            userData: User, 
            token
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Pas pu inserer",
        })
    }
}
