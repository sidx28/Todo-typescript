import { Reducer } from "redux";
import {
  COMPLETE_TODO_DELETED,
  TODO_ADD,
  TODO_DELETE,
  TODO_STATUS_CHANGE,
} from "../action/todos";
import { Todo } from "../models/todo";

export type TodoState = { [id: number]: Todo };
export const initialTodoState = {};

export const todoReducer: Reducer<TodoState> = (
  todoState = initialTodoState,
  action
) => {
  switch (action.type) {
    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;

      return {
        ...todoState,
        [id]: { ...todoState[id], done },
      };
    }
    case TODO_ADD: {
      const todo = action.payload;
      return { ...todoState, [todo.id]: todo };
    }
    case TODO_DELETE: {
      const { id } = action.payload;
      const newTodos = { ...todoState };
      delete newTodos[id];
      console.log(id);
      return newTodos;
    }

    default:
      return todoState;
  }
};
