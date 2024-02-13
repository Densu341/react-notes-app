import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <button onClick={handleToggle}>
      {theme === "dark" ? (
        <FaMoon size={20} className="text-gray-100" />
      ) : (
        <FaSun size={20} />
      )}
    </button>
  );
};

export default ToggleTheme;
