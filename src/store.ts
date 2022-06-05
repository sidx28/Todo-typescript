import { createStore, Reducer } from "redux";
import {
  COMPLETE_TODO_DELETED,
  TODO_ADD,
  TODO_STATUS_CHANGE,
} from "./action/todos";
import { Todo } from "./models/todo";

export type State = { todos: { [id: number]: Todo } };

const initialState: State = {
  todos: {},
};
const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;

      return {
        ...state,
        todos: { ...state.todos, [id]: { ...state.todos[id], done } },
      };
    }
    case TODO_ADD: {
      const todo = action.payload;
      return { ...state, todos: { ...state.todos, [todo.id]: todo } };
    }

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
