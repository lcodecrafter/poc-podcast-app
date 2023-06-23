import PropTypes from "prop-types";
import Nav from "../components/Nav";

export default function PageBase({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

PageBase.propTypes = {
  children: PropTypes.node,
};
