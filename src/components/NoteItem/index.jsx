import React from "react";
import PropTypes from "prop-types";
import showFormattedDate from "../../utils/date";
import { Link } from "react-router-dom";

const NoteItem = ({ title, createdAt, body, id }) => {
  return (
    <Link to={`/note/${id}`} className="w-full">
      <div className="w-full rounded-lg border shadow-md">
        <div className="flex p-2 gap-1">
          <div className="circle">
            <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm font-semibold ">
            {showFormattedDate(createdAt)}
          </p>
          <p className="text-sm">{body}</p>
        </div>
      </div>
    </Link>
  );
};

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteItem;
