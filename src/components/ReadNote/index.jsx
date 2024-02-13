import React, { useContext } from "react";
import showFormattedDate from "../../utils/date";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

const ReadNote = ({ title, createdAt, body }) => {
  const { locale } = useContext(LocaleContext);
  if (!title || !createdAt || !body) {
    return (
      <div className="text-dark p-4">
        <p>{locale === "id" ? "Data tidak ditemukan" : "No notes found"}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-sm font-semibold text-primary">
        {showFormattedDate(createdAt)}
      </p>
      <p className="text-sm">{body}</p>
    </div>
  );
};

ReadNote.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
};

export default ReadNote;
