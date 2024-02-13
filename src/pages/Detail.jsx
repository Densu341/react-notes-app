import React, { useEffect, useState, useContext } from "react";
import ReadNote from "../components/ReadNote";
import {
  getNote,
  unarchiveNote,
  archiveNote,
  deleteNote,
} from "../utils/network-data";
import { useParams, useNavigate } from "react-router-dom";
import ButtonAction from "../components/ButtonAction";
import LocaleContext from "../contexts/LocaleContext";

const Detail = () => {
  const params = useParams();
  const [notes, setNote] = useState(null);
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    const getSingleNote = async () => {
      try {
        const { error, data } = await getNote(params.id);
        if (!error) {
          setNote(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getSingleNote();
  }, [params]);

  const onArchiveNoteHandler = async () => {
    if (notes) {
      await archiveNote(notes.id);
      navigate("/");
    }
  };

  const onUnArchiveNoteHandler = async () => {
    if (notes) {
      await unarchiveNote(notes.id);
      navigate("/archive");
    }
  };

  const onDeleteNoteHandler = async () => {
    if (notes) {
      await deleteNote(notes.id);
      navigate("/");
    }
  };

  if (!notes) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg mt-4 ms-4">
      <div className="flex p-2 gap-1">
        <div className="">
          <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
        </div>
      </div>
      <ReadNote
        title={notes.title}
        createdAt={notes.createdAt}
        body={notes.body}
      />
      <div className="flex items-center gap-2 p-2">
        {notes.archived ? (
          <ButtonAction style="unarchive" onClick={onUnArchiveNoteHandler}>
            {locale === "id" ? "Batal Arsip" : "Unarchive"}
          </ButtonAction>
        ) : (
          <ButtonAction style="archive" onClick={onArchiveNoteHandler}>
            {locale === "id" ? "Arsipkan" : "Archive"}
          </ButtonAction>
        )}
        <ButtonAction style="delete" onClick={onDeleteNoteHandler}>
          {locale === "id" ? "Hapus" : "Delete"}
        </ButtonAction>
      </div>
    </div>
  );
};

export default Detail;
