import { values } from "lodash";
import { createSelector } from "reselect";
import { State } from "../store";
import { activeUserSelector } from "./user";

export const todoListSelector = (s: State) => values(s.todos);

export const todoListSelectorByUser = createSelector(
  activeUserSelector,
  todoListSelector,
  (activeUser, todos) => todos.filter((t) => t.userId === activeUser.id)
);

export const incompleteTodoSelector = createSelector(
  todoListSelectorByUser,
  (todos) => todos.filter((t) => !t.done)
);
export const completeTodoSelector = createSelector(
  todoListSelectorByUser,
  (todos) => todos.filter((t) => t.done)
);
