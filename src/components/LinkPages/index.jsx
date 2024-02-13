import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkPages = ({ icon, label, path, active, onClick }) => {
  return (
    <Link
      className={`relative flex items-center w-full px-4 py-2 my-4 text-sm font-medium ${
        active ? "bg-primary border-b  rounded-lg" : "rounded-lg "
      } border-primary hover:bg-slate-700 hover:text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-secondary`}
      to={path}
      onClick={onClick}
    >
      {icon && (
        <svg
          className="w-6 h-6 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {icon}
        </svg>
      )}
      {label}
    </Link>
  );
};

LinkPages.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  path: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default LinkPages;
