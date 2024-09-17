import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "../components/Todo/Todo";
import Arrays from "../components/ArrayStates/Arrays";
import Reducer from "../components/UseReducer/reducer";
import Wrapper from "../components/Context/wrapper";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Arrays />} />
      <Route path="/about" element={<Todo />} />
      <Route path="/reducer" element={<Reducer />} />
      <Route path="/context" element={<Wrapper />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
