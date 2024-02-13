import React, { useContext } from "react";
import PropTypes from "prop-types";
import NotesItem from "../NoteItem";
import LocaleContext from "../../contexts/LocaleContext";

function NotesList({ notes }) {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <h2 className="text-lg font-semibold py-4">
        {locale === "id" ? "Daftar Catatan" : "Notes List"}
      </h2>
      {notes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-between w-full">
          {notes.map((note) => (
            <NotesItem key={note.id} id={note.id} {...note} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-lg">
            {locale === "id" ? "Tidak ada catatan" : "No notes found"}
          </h3>
        </div>
      )}
    </>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
