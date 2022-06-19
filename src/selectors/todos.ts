import { State } from "../store";

export const incompleteTodoSelector = (s: State) =>
  Object.keys(s.todos)
    .map((todoId) => s.todos[todoId as any])
    .filter((t) => !t.done);
export const completeTodoSelector = (s: State) =>
  Object.keys(s.todos)
    .map((todoId) => s.todos[todoId as any])
    .filter((t) => t.done);
