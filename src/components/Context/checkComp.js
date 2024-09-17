import { useContext } from "react";
import { TestContext } from "./contextApi";

const CheckComp = () => {
  const checkContext = useContext(TestContext);

  return <div>Check Comp {checkContext}</div>;
};

export default CheckComp;
