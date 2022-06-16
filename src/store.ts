import { createStore, Reducer } from "redux";
import { initialTodoState, todoReducer, TodoState } from "./States/todos";
import { initialUserState, userReducer, UserState } from "./States/user";

export type State = {
  todos: TodoState;
  user: UserState;
};

const initialState: State = {
  todos: initialTodoState,
  user: initialUserState,
};
const reducer: Reducer<State> = (state = initialState, action) => {
  return {
    todos: todoReducer(state.todos, action),
    user: userReducer(state.user, action),
  };
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
