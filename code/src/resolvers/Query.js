import { db } from "../db/db.js";

export const Query = {
    hello: () => 'world',
    getTodos: () => {
        return db.todos;
    },
    getTodoById: (parents, {id}, context, info) => {
        console.log("id", id)
        const todo = db.todos.find(todo => todo.id === parseInt(id));

        if(!todo) {
            throw new Error(`Todo with id ${id} not found`);
        }

        return todo;
    }
}