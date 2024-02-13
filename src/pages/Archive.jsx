import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getArchivedNotes,
  archiveNote,
  unarchiveNote,
} from "../utils/network-data";
import NotesList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import PropsTypes from "prop-types";

function Archive() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [notes, setNotes] = useState([]);
  const [defaultKeyword, setDefaultKeyword] = useState(keyword);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getArchivedNotes();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const onKeywordChangeHandler = (newKeyword) => {
    setDefaultKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  const onArchiveNoteHandler = async (id) => {
    await archiveNote(id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const onUnarchiveNoteHandler = async (id) => {
    await unarchiveNote(id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) => {
    return (
      note.archived === true &&
      note.title.toLowerCase().includes(defaultKeyword.toLowerCase())
    );
  });

  return (
    <section className="p-4 w-full">
      <SearchBar
        keyword={defaultKeyword}
        onKeywordChange={onKeywordChangeHandler}
      />
      {isLoading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <NotesList
          notes={filteredNotes}
          onArchive={onArchiveNoteHandler}
          onUnarchive={onUnarchiveNoteHandler}
        />
      )}
    </section>
  );
}

Archive.propTypes = {
  defaultKeyword: PropsTypes.string,
  onKeywordChange: PropsTypes.func,
};

export default Archive;
