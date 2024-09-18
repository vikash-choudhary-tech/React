import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  useMemo(() => {
    new Array(10000).fill(1).forEach((item) => console.log(item));
  }, []);
  return (
    <>
      Count {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default UseMemo;
