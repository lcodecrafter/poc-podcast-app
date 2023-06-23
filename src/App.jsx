import PropTypes from "prop-types";
import { LoadingProvider } from "./contexts/loading-context";
import "./App.css";

function App({ children }) {
  return <LoadingProvider>{children}</LoadingProvider>;
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
