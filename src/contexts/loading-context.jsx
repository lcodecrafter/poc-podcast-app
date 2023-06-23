import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const loadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const loadingHandler = (value) => {
    setIsLoading(value);
  };

  const contextValue = {
    isLoading,
    loadingHandler,
  };

  return (
    <loadingContext.Provider value={contextValue}>
      {children}
    </loadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.node,
};
