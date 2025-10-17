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
        new Todo('Aprender Git'),
        new Todo('Aprender Clean Code'),
        new Todo('Aprender Disciplina'),
    ],
    filter: Filter.All, // all, completed, pending  
}

const initStore = () => {
    loadStore();
    console.log('Init Store 🥑');

}

/**
 * está función se encarga de guardar el estado en el localStorage
 */
const loadStore = () => {
   if(!localStorage.getItem('state')) return;
   const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
   state.todos = todos;
   state.filter = filter;


}

const saveStateToLocalStorage = () =>{
    localStorage.setItem('state',JSON.stringify(state));
}

/**
 * Esta función se encarga de retornar las tareas pendientes según el filtro aplicado
 * @param {*} filter recibe el filtro a aplicar (all, completed, pending)
 */

const getTodos = (filter = Filter.All) => {
    switch (filter) {
        case Filter.All:
            return [...state.todos];
        case Filter.Completed:
            return state.todos.filter(todo => todo.done);
        case Filter.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid`);
    }
}

/**
 * Esta función se encarga de guardar el estado en el localStorage
 * @param {String} description recibe la descripción de la nueva tarea pendiente 
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));
    saveStateToLocalStorage();

}

/**
 * Esta función se encarga de cambiar el estado de una tarea pendiente
 * @param {String} todoId recibe el id de la tarea pendiente a modificar
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if(todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    });
    saveStateToLocalStorage();

}
/**
 * Esta función se encarga de eliminar una tarea pendiente del state
 * @param {String} todoId  recibe el id de la tarea pendiente a eliminar
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();

}

//esta función se encarga de eliminar todas las tareas completadas
const deleteCompleted = () => {
        state.todos = state.todos.filter(todo => todo.done);
        saveStateToLocalStorage();

}

/**
 * esta función se encarga de cambiar el filtro de las tareas pendientes
 * @param {Filters} newFilter recibe el nuevo filtro a aplicar (all, completed, pending)
 */
const setFilter = (newFilter = Filter.All) => {
    //esta validación es para asegurarnos que el filtro que se recibe es válido
    state.filter = newFilter;
    saveStateToLocalStorage();
}

//esta función retorna el filtro actual
const getCurrentFilter = () => {
    return state.filter;

}

export default {

    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}
