import { ADD_TODO, REMOVE_TODO, RESET_TODOS } from "../actions/todos.actions";

const defaultState = [];
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case REMOVE_TODO:
      return state.filter(todo => todo !== payload);
    case RESET_TODOS:
      return [];
    default:
      return state;
  }
};
