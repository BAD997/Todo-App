import html from './app.html?raw';
/**
 * Esta función se encarga de inicializar la aplicación de tareas pendientes (todo app).
 * @param {String} elementId - El ID del elemento HTML donde se montará la aplicación. 
 */

export const App = (elementId) => {

    // Referencia al elemento HTML donde se montará la aplicación
    (()=>{
        const app = document.createElement('main');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();

};
