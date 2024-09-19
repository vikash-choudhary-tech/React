import Component1 from "./component1";
import HOC from "./hoc";

const Home = () => {
  const AuthComp = HOC(Component1);
  return (
    <>
      Hi <AuthComp />
    </>
  );
};

export default Home;
