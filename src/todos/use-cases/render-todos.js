import { Todo } from "../models/todo-models";
import { createTodoHtml } from "./create-todo-html";

let element;

/***
 * Esta función se encarga de renderizar las tareas pendientes (todos) en el elemento HTML especificado.
 * @param {String} elementId - El ID del elemento HTML donde se montarán las tareas pendientes.
 * @param {Todo} todos - Un arreglo de objetos de tareas pendientes a renderizar.
 */
export const rederTodos = (elementId, todos = []) => {
    if (!element)
        element = document.querySelector(elementId);

    if (!element) throw new Error(`Element ${elementId} not found `);

    element.innerHTML = '';
    todos.forEach(todo => {
        element.append(createTodoHtml(todo));
    });
}