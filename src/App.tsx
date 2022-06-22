import { Link, Route, Routes } from "react-router-dom";
import TodoPage from "./Components/TodoPage";
import UserPage from "./Components/UserPage";

function App() {
  return (
    <>
      <div>
        <Link to={"/"}>Todos</Link>
        <Link to={"/users"}>Users</Link>
      </div>
      <Routes>
        <Route index element={<TodoPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
