import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  const contextValue = {
    locale,
    toggleLocale,
  };

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
};

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LocaleContext;
