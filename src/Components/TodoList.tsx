import { FC, memo } from "react";
import { connect } from "react-redux";
import { todoStatusChange } from "../action/todos";
import { Todo } from "../models/todo";
import {
  completeTodoSelector,
  incompleteTodoSelector,
} from "../selectors/todos";
import { State } from "../store";
import TodoTile from "./TodoTile";

type TodoListProps = {
  todos: Todo[];
  onStatusChange: (id: number, done: boolean) => void;
};

const TodoList: FC<TodoListProps> = ({ todos, onStatusChange }) => {
  return (
    <>
      <ul>
        {todos.map((e) => (
          <TodoTile
            onStatusChange={onStatusChange}
            todo={e}
            key={e.id}
          ></TodoTile>
        ))}
      </ul>
    </>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);
const dispatchMapper = { onStatusChange: todoStatusChange };
const incompleteMapper = (s: State) => ({ todos: incompleteTodoSelector(s) });

const completeMapper = (s: State) => ({ todos: completeTodoSelector(s) });

export const IncompleteTodoList = connect(
  incompleteMapper,
  dispatchMapper
)(TodoList);
export const CompleteTodoList = connect(
  completeMapper,
  dispatchMapper
)(TodoList);
