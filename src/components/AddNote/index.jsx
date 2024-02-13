import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import ButtonAction from "../ButtonAction";
import { addNote } from "../../utils/network-data";
import LocaleContext from "../../contexts/LocaleContext";

const AddNote = ({ onNoteAdded }) => {
  const [note, setNote] = useState({ title: "", body: "" });
  const { locale } = useContext(LocaleContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleAddNote = async (event) => {
    event.preventDefault();

    const { title, body } = note;

    if (title && body) {
      try {
        const { data } = await addNote({ title, body });

        const newNote = {
          id: data.id,
          title,
          body,
          createdAt: data.createdAt,
          archived: false,
        };

        onNoteAdded(newNote);
        setNote({ title: "", body: "" });
      } catch (error) {
        console.error("Error adding note:", error);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="rounded-lg border shadow-md p-6">
        <form className="flex flex-col" onSubmit={handleAddNote}>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder={locale === "id" ? "Judul Catatan..." : "Note Title..."}
          />
          <textarea
            name="body"
            value={note.body}
            onChange={handleChange}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder={locale === "id" ? "Isi Catatan..." : "Note Body..."}
            rows="10"
          ></textarea>

          <ButtonAction type="submit" style={"save"}>
            {locale === "id" ? "Simpan Catatan" : "Save Note"}
          </ButtonAction>
        </form>
      </div>
    </div>
  );
};

AddNote.propTypes = {
  onNoteAdded: PropTypes.func,
};

export default AddNote;
