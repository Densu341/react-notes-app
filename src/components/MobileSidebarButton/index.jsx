// MobileSidebarButton.jsx
import React, { useState } from "react";
import Sidebar from "../Sidebar";

const MobileSidebarButton = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        className="md:hidden focus:outline-none mx-4"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isSidebarVisible ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      <aside
        className={`md:hidden w-64 px-4 h-screen absolute top-6 left-0 ${
          isSidebarVisible ? "block" : "hidden"
        }`}
      >
        <Sidebar />
      </aside>
    </div>
  );
};

export default MobileSidebarButton;
