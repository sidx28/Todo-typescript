import { Reducer } from "redux";
import { TODO_ADD, TODO_DELETE, TODO_STATUS_CHANGE } from "../action/todos";
import { Todo } from "../models/todo";
import { cacheData, getCachedData } from "../utils";

export type TodoState = { [id: number]: Todo };
export const initialTodoState = getCachedData("todos") || {};

export const todoReducer: Reducer<TodoState> = (
  todoState = initialTodoState,
  action
) => {
  switch (action.type) {
    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;
      const newTodos = {
        ...todoState,
        [id]: { ...todoState[id], done },
      };
      cacheData("todos", newTodos);
      return newTodos;
    }
    case TODO_ADD: {
      const todo = action.payload;
      const newTodos = { ...todoState, [todo.id]: todo };
      cacheData("todos", newTodos);
      cacheData("todosCount", todo.id);
      return newTodos;
    }
    case TODO_DELETE: {
      const { id } = action.payload;
      const newTodos = { ...todoState };
      delete newTodos[id];
      cacheData("todos", newTodos);
      return newTodos;
    }

    default:
      return todoState;
  }
};
