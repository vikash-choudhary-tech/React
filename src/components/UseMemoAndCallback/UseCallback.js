import { useCallback, useState } from "react";
import UseCallbackchild from "./Usecallbackchild";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const test = useCallback(fn, []);

  function fn() {
    return "Vikash";
  }

  return (
    <>
      {count}
      <UseCallbackchild test={test} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default UseCallback;
