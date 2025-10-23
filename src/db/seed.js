import { db } from './database.js'
import { questionsTable } from './schema.js'

async function seed() {
    try {
        console.log('Database seeding starting...')
        await db.delete(questionsTable)

        const seedQuestions = [
			{
				questionText: 'Quelle est la cpaitale de la France?',
				answer: 'Paris',
				difficulty: 'easy',
			},
			{
				questionText: 'Quel est le plus grand océan du monde?',
				answer: "L'océan Pacifique",
				difficulty: 'medium',
			},
			{
				questionText: 'Qui a écrit "Les Misérables"?',
				answer: 'Victor Hugo',
				difficulty: 'difficult',
			},
		]

        await db.insert(questionsTable).values(seedQuestions)

        console.log('check')
    } catch (error) {
        console.log('Error seeding database',error)
    }
}

seed()