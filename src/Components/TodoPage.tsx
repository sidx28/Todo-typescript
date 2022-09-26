import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import Button from "../BasicComponents/Button";
import H1 from "../BasicComponents/H1";
import H3 from "../BasicComponents/H3";
import AddTodoForm from "./AddTodoForm";
import { CompleteTodoList, IncompleteTodoList } from "./TodoList";
import {
  completeTodoSelector,
  incompleteTodoSelector,
} from "../selectors/todos";
import { State } from "../store";
import { withRouter, WithRouterProps } from "../hoc/withRouter";
import { addActiveCategory } from "../action/categories";
import Header from "./Header";

type TodoPageProps = {
  completeTodosCount: number;
  incompleteTodosCount: number;
  addActiveCategory: (id: number) => void;
} & WithRouterProps;

const TodoPage: FC<TodoPageProps> = ({
  completeTodosCount,
  incompleteTodosCount,
  params,
  addActiveCategory,
}) => {
  useEffect(() => {
    addActiveCategory(+params.categoryId);
  }, [params.categoryId]);
  return (
    <>
      <Header />
      <div className="p-5 space-y-4">
        <H1> Things to get done</H1>
        <div className="ml-5">
          <H3>Things to do</H3>
          {!incompleteTodosCount && (
            <span className="text-gray-500 ml-5">No todo here!</span>
          )}
          <IncompleteTodoList />
          <div className="my-5 ml-20">
            <AddTodoForm />
          </div>
          <div className="space-x-10 flex flex-row">
            <H3 className="text-2xl font-semibold">Things done</H3>
            <Button theme="secondary">Clear All</Button>
          </div>
          {!completeTodosCount && (
            <span className="text-gray-500">No todo here!</span>
          )}
          <CompleteTodoList />
        </div>
      </div>
    </>
  );
};

TodoPage.defaultProps = {};
const mapStateToProps = (s: State) => ({
  completeTodosCount: completeTodoSelector(s).length,
  incompleteTodosCount: incompleteTodoSelector(s).length,
});
const mapDispatchToProps = { addActiveCategory: addActiveCategory };
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(TodoPage))
);
