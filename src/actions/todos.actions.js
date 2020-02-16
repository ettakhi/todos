export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const RESET_TODOS = "RESET_TODOS";

export const addTodo = text => ({
  type: ADD_TODO,
  payload: text
});

export const removeTodo = text => ({
  type: REMOVE_TODO,
  payload: text
});

export const resetTodos = () => ({
  type: RESET_TODOS
});
