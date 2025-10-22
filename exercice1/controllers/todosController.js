import { writeFile, readFile } from "fs/promises";

const readTodos = async () => {
    try {
        const content = await readFile('./exercice1/todos.json','utf-8')
        return JSON.parse(content)
    } catch (error) {
        if (error.code == 'ENOENT'){
            return [];
        }
        throw error;
    }
}

export const addTodos = async (req, res) => {
    try {
        const {text, completed = false} = req.body
        if(!text.trim() || typeof completed !== 'boolean'){
            res.status(400).send({ message: 'VIDE'})
        }
        const id = crypto.randomUUID()
        let todos = await readTodos();
        todos.push({
            id: id,
            text: text.trim(),
            completed: completed
        });

        await writeFile('./exercice1/todos.json', JSON.stringify(todos, null, 2))
        res.status(201).send({ message: 'Question Created'})
    } 
    catch (error) {
        res.status(500).send(error)
    }
}

