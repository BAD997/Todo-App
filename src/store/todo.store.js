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

/**
 * está función se encarga de guardar el estado en el localStorage
 */
const loadStore = () => {
    throw new Error('Function not implemented.');

}

/**
 * Esta función se encarga de guardar el estado en el localStorage
 * @param {String} description recibe la descripción de la nueva tarea pendiente 
 */
const addTodo = (description) => {
    throw new Error('Function not implemented.');

}

/**
 * Esta función se encarga de cambiar el estado de una tarea pendiente
 * @param {String} todoId recibe el id de la tarea pendiente a modificar
 */
const toggleTodo = (todoId) => {
    throw new Error('Function not implemented.');

}
/**
 * Esta función se encarga de eliminar una tarea pendiente del state
 * @param {String} todoId  recibe el id de la tarea pendiente a eliminar
 */
const deleteTodo = (todoId) => {
    throw new Error('Function not implemented.');

}

//esta función se encarga de eliminar todas las tareas completadas
const deleteCompleted = () => {
    throw new Error('Function not implemented.');

}

/**
 * esta función se encarga de cambiar el filtro de las tareas pendientes
 * @param {Array<String>} newFilter recibe el nuevo filtro a aplicar (all, completed, pending)
 */
const setFilter = (newFilter = Filter.All) => {
    throw new Error('Function not implemented.');
}

const getCurrentFilter = () => {
    throw new Error('Function not implemented.');
}

export default {

    addTodo,
    deleteCompleted,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}
