import React, { useContext } from "react";
import LocaleContext from "../../contexts/LocaleContext";
import { SiGoogletranslate } from "react-icons/si";

const ToggleLang = () => {
  const { locale, toggleLocale } = useContext(LocaleContext);

  const handleToggle = () => {
    toggleLocale();
  };

  return (
    <button onClick={handleToggle}>
      <SiGoogletranslate size={20} />
    </button>
  );
};

export default ToggleLang;
