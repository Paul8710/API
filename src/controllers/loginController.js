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
export const loginUser = async (req, res) => {
    const {email, password} = req.body
    //console.log(email, username, password)
    if (!email || !password){
        return res.status(400).send({ error: 'Invalid request'})
    }
    
    try {
        //let hashpassword = bcrypt.hashSync(password,12)

        const [motdepasse] = await db.select().from(usersTable).where(eq(usersTable.email, email))
        if (!motdepasse) {
            return res.status(401).json({
                error: "User or password invalid"
            })
        }

        //console.log(motdepasse);
        if(!bcrypt.compareSync(password, motdepasse.password)){
            res.status(400).json({
                error: "User or password invalid"
            })
        }
        const User = await db.select().from(usersTable).where(eq(usersTable.email, email))

        const token = jwt.sign({ userId: User.id}, process.env.JWT_SECRET, { expiresIn: '24h'})
        
        res.status(201).json({
            message:'Vous etes co', 
            userData: User,
            token 
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "User or password invalid",
        })
    }
}
