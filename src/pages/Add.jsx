import React, { useContext } from "react";
import AddNote from "../components/AddNote";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

const Add = () => {
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();
  const handleNoteAdded = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        {locale === "id" ? "Catatan Baru" : "New Note"}
      </h1>
      <AddNote onNoteAdded={handleNoteAdded} />
    </div>
  );
};

export default Add;
