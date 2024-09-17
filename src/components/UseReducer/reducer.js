import { useReducer } from "react";

const Reducer = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "increment") {
      return state + 1;
    }
    if (action.type === "decrement") {
      return state - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Reducer;
