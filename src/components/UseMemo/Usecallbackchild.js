import React from "react";

const UseCallbackchild = ({ test }) => {
  console.log("TEst");

  return (
    <>
      {/* {count} */}
      {/* <button onClick={() => setCount(count + 1)}>Test Button</button> */}
      <button>Test Button</button>
    </>
  );
};

export default React.memo(UseCallbackchild);
