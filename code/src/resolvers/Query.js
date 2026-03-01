const todos = [
    {
        id: 1,
        name: 'Learn GraphQL',
        content: 'Learn GraphQL by building a simple API',
        status:"WAITING"
    },
    {
        id: 2,
        name: 'Learn React',
        content: 'Learn React by building a simple app',
        status:"WAITING"
    },
    {
        id: 3,
        name: 'Learn Node.js',
        content: 'Learn Node.js by building a simple API',
        status:"WAITING"
    }
]

export const Query = {
    hello: () => 'world',
    getTodos: () => {
        return todos;
    },
}