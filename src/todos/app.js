import html from './app.html?raw';
import todoStore, {Filter}  from '../store/todo.store';
import { rederTodos } from './use-cases';


const ElementId = {
    todoList: '.todo-list',
    newTodoInput: '#new-todo-input',
    clearCompleted: '.clear-completed',
    todoFilters: '.filtro',
   

}
/**
 * Esta función se encarga de inicializar la aplicación de tareas pendientes (todo app).
 * @param {String} elementId - El ID del elemento HTML donde se montará la aplicación. 
 */

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        rederTodos(ElementId.todoList, todos);


    }

    // Referencia al elemento HTML donde se montará la aplicación
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector(ElementId.newTodoInput);
    const todoListUl = document.querySelector(ElementId.todoList);
    const btnClearCompleted = document.querySelector(ElementId.clearCompleted);
    const filtersList = document.querySelectorAll(ElementId.todoFilters);

    // Listener
    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });


    todoListUl.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUl.addEventListener('click', (event) => {

        const destroyBtn = event.target.closest('.destroy');
        const element = event.target.closest('[data-id]');

        // Si no hay botón destroy o no hay elemento con data-id, salir
        if (!destroyBtn || !element) return;

        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();

    });

    btnClearCompleted.addEventListener('click', ()=>{
        
        todoStore.deleteCompleted();
        displayTodos();

    });

    filtersList.forEach(element  => {
        element.addEventListener('click', (element)=>{
           filtersList.forEach(el => el.classList.remove('selected'))
            element.target.classList.add('selected')

            switch(element.target.text){
                case 'Todos':
                    todoStore.setFilter(Filter.All)
                    break;
                case 'Pendientes': 
                    todoStore.setFilter(Filter.Pending)
                    break;
                case 'Completados':
                    todoStore.setFilter(Filter.Completed)
                    break;
                
            }

            displayTodos();
            

        });
    })



};
