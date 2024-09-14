import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "../components/Todo/Todo";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Todo />} />
      <Route path="/about" element={<Todo />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
