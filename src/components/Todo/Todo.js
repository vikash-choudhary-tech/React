import { Fragment, useRef, useState } from "react";
import TodoList from "./TodoList";
import classes from "./Todo.module.css";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const todoRef = useRef();

  const addTodo = () => {
    const newArray = [...todoList, todoRef.current.value];
    setTodoList(newArray);
  };

  const removeTodo = (index) => {
    console.log("Index", index);
    let arr = [...todoList];
    arr.splice(index, 1);
    setTodoList(arr);
  };

  return (
    <Fragment>
      <label className={classes["label-color"]} htmlFor="addTodo">
        Add Todo
      </label>
      <input type="text" id="addTodo" name="addTodo" ref={todoRef} />
      <button onClick={addTodo}>Add</button>
      {todoList.length > 0 && (
        <TodoList
          todoList={todoList}
          removeTodoItem={(index) => removeTodo(index)}
        />
      )}
    </Fragment>
  );
};

export default Todo;
