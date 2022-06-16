import { Route, Routes } from "react-router-dom";
import TodoPage from "./Components/TodoPage";
import UserPage from "./Components/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<TodoPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
