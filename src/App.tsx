import { Link, Route, Routes } from "react-router-dom";
import TodoPage from "./Components/TodoPage";
import UserPage from "./Components/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/:userName/todos" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
