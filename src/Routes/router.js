import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "../components/Todo/Todo";
import Arrays from "../components/ArrayStates/Arrays";
import Reducer from "../components/UseReducer/reducer";
import Wrapper from "../components/Context/wrapper";
import UseMemo from "../components/UseMemo/UseMemo";
import UseCallback from "../components/UseMemo/UseCallback";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Arrays />} />
      <Route path="/about" element={<Todo />} />
      <Route path="/reducer" element={<Reducer />} />
      <Route path="/context" element={<Wrapper />} />
      <Route path="/memo" element={<UseMemo />} />
      <Route path="/callback" element={<UseCallback />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
