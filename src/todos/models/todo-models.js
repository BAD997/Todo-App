

export class Todo {
    /**
     * Este constructor crea una nueva tarea pendiente.
     * @param {String} description 
     */
    constructor( description ){ 
        this.id = 1;
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}