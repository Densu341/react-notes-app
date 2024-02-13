import React, { useState, useEffect, useContext } from "react";
import { IoHome, IoArchive, IoAddCircle } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import LinkPages from "../LinkPages";
import PropTypes from "prop-types";
import ThemeContext from "../../contexts/ThemeContext";
import LocaleContext from "../../contexts/LocaleContext";

const Sidebar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("Home");
  const { theme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      setActiveMenu("Home");
    } else if (path === "/archive") {
      setActiveMenu("Archive");
    } else if (path === "/add") {
      setActiveMenu("Add Notes");
    } else if (path === "/404") {
      setActiveMenu("Settings");
    } else {
      setActiveMenu("");
    }
  }, [location.pathname]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="md:h-3/4 pt-4 ">
      <div
        className={`w-48 border rounded-lg h-full px-2 py-4 ${
          theme === "light" ? "bg-slate-100" : "bg-slate-800"
        }`}
      >
        <LinkPages
          icon={<IoHome />}
          label={locale === "id" ? "Beranda" : "Home"}
          path={"/"}
          active={activeMenu === "Home"}
          onClick={() => handleMenuClick("Home")}
        />
        <LinkPages
          icon={<IoArchive />}
          label={locale === "id" ? "Arsip" : "Archive"}
          path={"/archive"}
          active={activeMenu === "Archive"}
          onClick={() => handleMenuClick("Archive")}
        />
        <LinkPages
          icon={<IoAddCircle />}
          label={locale === "id" ? "Catatan Baru" : "Add Notes"}
          path={"/add"}
          active={activeMenu === "Add Notes"}
          onClick={() => handleMenuClick("Add Notes")}
        />
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  onMenuClick: PropTypes.func,
  activeMenu: PropTypes.string,
};

export default Sidebar;
