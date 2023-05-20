import "./App.css";
import Parent from "./components/ComponentInteraction/Parent";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Todo/>
      <Parent/>
    </div>
  );
}
export default App;
