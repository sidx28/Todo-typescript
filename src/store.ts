import { combineReducers, createStore } from "redux";
import { todoReducer } from "./reducers/todos";
import { categoryReducer } from "./reducers/categories";

export const reducer = combineReducers({
  todos: todoReducer,
  category: categoryReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export type State = ReturnType<typeof store.getState>;

export default store;
