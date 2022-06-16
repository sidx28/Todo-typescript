export const TODO_STATUS_CHANGE = "todo status change";
export const TODO_ADD = "todo add";
export const COMPLETE_TODO_DELETED = "todo deleted";
let count = 0;
export const todoAdd = (todoText: string) => ({
  type: TODO_ADD,
  payload: { id: ++count, title: todoText, done: false },
});
export const todoStatusChange = (todoId: number, newStatus: boolean) => ({
  type: TODO_STATUS_CHANGE,
  payload: { id: todoId, done: newStatus },
});

export const clearCompleteTodoList = (completeTodoId: number[]) => ({
  type: COMPLETE_TODO_DELETED,
  payload: { completeTodoId },
});
