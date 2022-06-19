import { FC, memo, useCallback } from "react";
import Input from "../BasicComponents/Input";
import { Todo } from "../models/todo";
import cn from "classnames";
import Button from "../BasicComponents/Button";

type TodoTileProps = {
  todo: Todo;
  onStatusChange: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
};

const TodoTile: FC<TodoTileProps> = ({ todo, onStatusChange, onDelete }) => {
  const { id, title, done } = todo;

  const handleChange = useCallback(() => {
    onStatusChange(id, !done);
  }, [id, done]);
  const handleOnDelete = () => {
    onDelete(id);
  };
  return (
    <>
      <li className="list-none">
        <div className="flex flex-row items-center p-1">
          <Input type="checkbox" checked={done} onChange={handleChange} />
          <p className={cn("ml-3 font-semibold", { "line-through": done })}>
            {title}
          </p>
          {done && (
            <div className="pl-3">
              <Button theme="secondary" onClick={handleOnDelete}>
                Delete
              </Button>
            </div>
          )}
        </div>
      </li>
    </>
  );
};

TodoTile.defaultProps = {};

export default memo(TodoTile);
