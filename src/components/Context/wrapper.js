import { useContext } from "react";
import { TestContext } from "./contextApi";
import CheckComp from "./checkComp";

const Wrapper = () => {
  const context = useContext(TestContext);

  return (
    <>
      <div>Testing {context}</div>
      <TestContext.Provider value={123}>
        <CheckComp />
      </TestContext.Provider>
    </>
  );
};

export default Wrapper;
