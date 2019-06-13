import * as uuid from 'uuid/v4';


/* Action creators for components */
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: uuid(),
    text,
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id,
});

