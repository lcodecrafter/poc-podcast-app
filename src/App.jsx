import PropTypes from "prop-types";
import "./App.css";
import Nav from "./components/Nav";

function App({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
