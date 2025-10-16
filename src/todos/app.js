import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { rederTodos } from './use-cases';

const ElementId = {
    todoList: '.todo-list',

}
/**
 * Esta función se encarga de inicializar la aplicación de tareas pendientes (todo app).
 * @param {String} elementId - El ID del elemento HTML donde se montará la aplicación. 
 */

export const App = (elementId) => {

    const displayTodos = () =>{
         const todos = todoStore.getTodos(todoStore.getCurrentFilter());
         rederTodos(ElementId.todoList, todos);
         

    }

    // Referencia al elemento HTML donde se montará la aplicación
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

};
