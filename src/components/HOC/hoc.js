const HOC = (Component) => {
  const styles = {
    backgroundColor: "pink",
  };
  return function (props) {
    return (
      <div style={styles}>
        <Component {...props} props="This is a random prop" />
      </div>
    );
  };
};

export default HOC;
