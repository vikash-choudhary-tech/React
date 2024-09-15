import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "../components/Todo/Todo";
import Arrays from "../components/ArrayStates/Arrays";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Arrays />} />
      <Route path="/about" element={<Todo />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
