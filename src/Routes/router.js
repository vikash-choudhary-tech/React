import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "../components/Todo/Todo";
import Arrays from "../components/ArrayStates/Arrays";
import Reducer from "../components/UseReducer/reducer";
import Wrapper from "../components/Context/wrapper";
import UseMemo from "../components/UseMemoAndCallback/UseMemo";
import UseCallback from "../components/UseMemoAndCallback/UseCallback";
import Home from "../components/HOC/home";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Arrays />} />
      <Route path="/about" element={<Todo />} />
      <Route path="/reducer" element={<Reducer />} />
      <Route path="/context" element={<Wrapper />} />
      <Route path="/memo" element={<UseMemo />} />
      <Route path="/callback" element={<UseCallback />} />
      <Route path="/hoc" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
