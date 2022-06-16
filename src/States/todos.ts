import { Reducer } from "redux";
import { TODO_ADD, TODO_STATUS_CHANGE } from "../action/todos";
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

    default:
      return todoState;
  }
};
