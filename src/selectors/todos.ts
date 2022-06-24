import { values } from "lodash";
import { createSelector } from "reselect";
import { State } from "../store";

export const todoListSelector = (s: State) => values(s.todos);

export const todoListSelectorByUser = (state: State, userName: string) =>
  todoListSelector(state).filter((todo) => todo.user === userName);

export const incompleteTodoSelector = createSelector(
  todoListSelector,
  (todos) => todos.filter((t) => !t.done)
);
export const completeTodoSelector = createSelector(todoListSelector, (todos) =>
  todos.filter((t) => t.done)
);
