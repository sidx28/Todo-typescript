import { FC, memo } from "react";
import { useSelector } from "react-redux";
import Button from "./BasicComponents/Button";
import H1 from "./BasicComponents/H1";
import H3 from "./BasicComponents/H3";
import AddTodoForm from "./Components/AddTodoForm";
import { CompleteTodoList, IncompleteTodoList } from "./Components/TodoList";
import {
  completeTodoSelector,
  incompleteTodoSelector,
} from "./selectors/todos";
import { State } from "./store";
type ContainerProps = {};

const Container: FC<ContainerProps> = () => {
  const completeTodoCount = useSelector((s: State) =>
    completeTodoSelector(s)
  ).length;

  const incompleteTodoCount = useSelector((s: State) =>
    incompleteTodoSelector(s)
  ).length;
  return (
    <>
      <div className="p-5 space-y-4">
        <H1> Things to get done</H1>
        <H3>Things to do</H3>
        {!incompleteTodoCount && (
          <span className="text-gray-500 ">No todo here!</span>
        )}

        <IncompleteTodoList />
        <div>
          <AddTodoForm></AddTodoForm>
        </div>
        <div className="space-x-10 flex flex-row">
          <H3 className="text-2xl font-semibold">Things done</H3>
          {/* <Button theme="secondary">Clear All</Button> */}
        </div>
        {!completeTodoCount && (
          <span className="text-gray-500">No todo here!</span>
        )}
        <CompleteTodoList />
      </div>
    </>
  );
};

Container.defaultProps = {};

export default memo(Container);
