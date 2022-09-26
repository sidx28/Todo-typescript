import { Link, Route, Routes } from "react-router-dom";
import TodoPage from "./Components/TodoPage";
import CategoryPage from "./Components/CategoryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/:categoryId/todos" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
