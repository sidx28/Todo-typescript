import { combineReducers, createStore } from "redux";
import { todoReducer } from "./reducers/todos";
import { userReducer } from "./reducers/user";

export const reducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export type State = ReturnType<typeof store.getState>;

export default store;
