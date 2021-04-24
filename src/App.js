import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="App" style={styles.container}>
      <NavBar />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
};

export default App;
