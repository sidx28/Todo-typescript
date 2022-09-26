import { values } from "lodash";
import { createSelector } from "reselect";
import { State } from "../store";
import { activeCategorySelector } from "./category";

export const todoListSelector = (s: State) => values(s.todos);

export const todoListSelectorByCategory = createSelector(
  activeCategorySelector,
  todoListSelector,
  (activeCategory, todos) => todos.filter((t) => t.categoryId === activeCategory.id)
);

export const incompleteTodoSelector = createSelector(
  todoListSelectorByCategory,
  (todos) => todos.filter((t) => !t.done)
);
export const completeTodoSelector = createSelector(
  todoListSelectorByCategory,
  (todos) => todos.filter((t) => t.done)
);
