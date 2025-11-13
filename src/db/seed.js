import bcrypt from 'bcrypt'
import { db } from './database.js'
import { questionsTable, usersTable } from './schema.js'

async function seed() {
    try {
		
        console.log('Database seeding starting...')
		await db.delete(usersTable)
        await db.delete(questionsTable)

		const seedUsers = [
			{
				email: 'pilote.koala@gmail.com',
				username: 'koalaGaming',
				password: bcrypt.hashSync('password',12), 
			},
			{
				email: 'truc@machin.com',
				username: 'trucbidule',
				password: bcrypt.hashSync('12345678',12), 
			}
		]

		const createdUsers = await db.insert(usersTable).values(seedUsers).returning()

        const seedQuestions = [
			{
				questionText: 'Quelle est la cpaitale de la France?',
				answer: 'Paris',
				difficulty: 'easy',
				createdBy: createdUsers[0].id,
			},
			{
				questionText: 'Quel est le plus grand océan du monde?',
				answer: "L'océan Pacifique",
				difficulty: 'medium',
				createdBy: createdUsers[1].id,
			},
			{
				questionText: 'Qui a écrit "Les Misérables"?',
				answer: 'Victor Hugo',
				difficulty: 'difficult',
				createdBy: createdUsers[0].id,
			},
		]

        await db.insert(questionsTable).values(seedQuestions)



        console.log('check')
    } catch (error) {
        console.log('Error seeding database',error)
    }
}

seed()