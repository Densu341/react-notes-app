import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

function SearchBar({ keyword, onKeywordChange }) {
  const { locale } = useContext(LocaleContext);
  return (
    <input
      className="form-control w-full"
      type="search"
      placeholder={locale === "id" ? "Cari Catatan..." : "Search Notes..."}
      value={keyword}
      onChange={(event) => onKeywordChange(event.target.value)}
    ></input>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
};
export default SearchBar;
