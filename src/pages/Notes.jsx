import React, { useState } from "react";
import { Header } from "../components/Header";

const Notes = () => {
  // State variables and functions related to notes
  const [selectedNote, setSelectedNote] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedNote(null);
    setShowModal(false);
  };

  const handleNoteTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSaveNote = () => {
    if (noteTitle.trim() === "" || notes.trim() === "") {
      // Handle case where either title or content is empty
      // For example, you can display an error message or prevent saving
      return;
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    const newNote = {
      title: noteTitle,
      content: notes,
      createdAt: formattedDate,
    };

    setAllNotes([...allNotes, newNote]);

    setNoteTitle("");
    setNotes("");
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...allNotes];
    updatedNotes.splice(index, 1);
    setAllNotes(updatedNotes);
  };

  return (
    <div>
      <Header>Notes of the day</Header>
      <input
        type="text"
        className="border border-gray-300 p-2 mb-4 w-full"
        placeholder="Title"
        value={noteTitle}
        onChange={handleNoteTitleChange}
      />
      <textarea
        className="border border-gray-300 p-2 mb-4 w-full h-80"
        placeholder="Write your thoughts here..."
        value={notes}
        onChange={handleNotesChange}
      />
      <button
        className="flex justify-center mx-auto px-8 py-3 w-full bg-blue-500 text-white rounded"
        onClick={handleSaveNote}
      >
        Save Note
      </button>

      <div className="mt-4">
        <h3 className="flex justify-center mt-8 font-semibold">All Notes:</h3>
        <ul>
          {allNotes.map((note, index) => (
            <li key={index} className="flex justify-between items-center">
              <button onClick={() => handleNoteClick(note)}>
                <span>{note.title}</span>
                <span className="text-gray-500 ml-2">
                  {note.createdAt}
                </span>{" "}
                {/* Display the creation date */}
              </button>
              <button
                className="text-red-500"
                onClick={() => handleDeleteNote(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="modal-container relative bg-white w-1/2 mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <div className="modal-content p-12 ">
                <button
                  className="absolute top-4 right-4"
                  onClick={handleCloseModal}
                >
                  X
                </button>
                <h2 className="font-bold">{selectedNote.title}</h2>
                <p className="font-light">{selectedNote.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
