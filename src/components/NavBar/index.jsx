import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <div className="NavBar" style={styles.container}>
      <Logo />
      <Search />
      <Menu />
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid grey",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    minWidth: "calc(700px + min(3vw, 1rem))",
  },
};

export default NavBar;
