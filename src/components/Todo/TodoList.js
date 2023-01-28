import { Fragment } from "react";

const TodoList = (props) => {
  console.log("-----", props.todoList);
  const removeTodo = (index) => {
    console.log("Emitted Index", index);
    props.removeTodoItem(index);
  };
  return (
    <Fragment>
      <ul>
        {props.todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
