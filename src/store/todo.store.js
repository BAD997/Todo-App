import { Todo } from "../todos/models/todo-models";


const Filter = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}
const state = {
    todos: [
        new Todo('Aprender JavaScript'),
        new Todo('Aprender Arquitectura limpia'),
        new Todo('Aprender inglés'),
        new Todo('Aprender Sql'),
    ],
    filter: Filter.All, // all, completed, pending  
}

const initStore = () => {
    console.log(state);
    console.log('Init Store 🥑');

}

export default {
    
    initStore,
}   