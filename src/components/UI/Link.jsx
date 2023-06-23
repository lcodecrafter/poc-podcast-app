import PropTypes from "prop-types";
import { Link as L } from "react-router-dom";
import styles from "./link.module.css";
import { loadingContext } from "../../contexts/loading-context";
import { useContext } from "react";

export default function Link({ to, className = "", children }) {
  const ctx = useContext(loadingContext);
  const handleClick = () => {
    ctx.loadingHandler(true);
  };

  return (
    <L
      className={className.length > 0 ? className : styles.link}
      to={to}
      onClick={handleClick}
    >
      {children}
    </L>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
