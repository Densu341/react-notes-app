import React from "react";
import PropTypes from "prop-types";

const ButtonAction = ({ children, onClick, style, ...props }) => {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  let buttonStyle =
    "px-4 py-2 rounded-lg text-sm transition ease-in-out duration-150";

  switch (style) {
    case "save":
      buttonStyle += " bg-green-500 hover:bg-green-600 text-white";
      break;
    case "archive":
      buttonStyle += " bg-yellow-500 hover:bg-yellow-600 text-white";
      break;
    case "unarchive":
      buttonStyle += " bg-orange-500 hover:bg-orange-600 text-white";
      break;
    case "delete":
      buttonStyle += " bg-red-500 hover:bg-red-600 text-white";
      break;
    default:
      buttonStyle += " bg-dark hover:bg-primary text-light";
      break;
  }

  return (
    <button onClick={handleClick} className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

ButtonAction.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.oneOf(["save", "edit", "archive", "unarchive", "delete"]),
};

export default ButtonAction;
