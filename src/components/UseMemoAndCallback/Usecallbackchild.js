import React from "react";

const UseCallbackchild = ({ test }) => {
  console.log("TEst");

  return (
    <>
      <button>Test Button</button>
    </>
  );
};

export default React.memo(UseCallbackchild);
