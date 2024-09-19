const HOC = (Component) => {
  const styles = {
    backgroundColor: "pink",
  };
  return function () {
    return (
      <div style={styles}>
        <Component props="This is a random prop" />
      </div>
    );
  };
};

export default HOC;
