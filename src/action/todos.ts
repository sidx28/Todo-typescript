import { getCachedData } from "../utils";

export const TODO_STATUS_CHANGE = "todo status change";
export const TODO_ADD = "todo add";
export const COMPLETE_TODO_DELETED = "complete todo delete";
export const TODO_DELETE = "todo delete";
let count = getCachedData("todosCount") || 0;

export const todoAdd = (todoText: String, categoryId: number) => ({
  type: TODO_ADD,
  payload: { id: ++count, title: todoText, done: false, categoryId },
});
export const todoStatusChange = (todoId: number, newStatus: boolean) => ({
  type: TODO_STATUS_CHANGE,
  payload: { id: todoId, done: newStatus },
});

export const clearCompleteTodoList = (completeTodoId: number[]) => ({
  type: COMPLETE_TODO_DELETED,
  payload: { completeTodoId },
});
export const todoDelete = (id: number) => ({
  type: TODO_DELETE,
  payload: { id },
});
