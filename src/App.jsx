import { useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSaveNote = () => {
    if (notes.trim() !== "") {
      setAllNotes([...allNotes, notes]);
      setNotes("");
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...allNotes];
    updatedNotes.splice(index, 1);
    setAllNotes(updatedNotes);
  };

  return (
    <div>
      <ul className="flex border-b">
        <li
          className={`-mb-px flex-1 ${
            activeTab === 0
              ? "border-l border-t border-r rounded-t text-blue-700"
              : "border-b border-gray-400 hover:text-blue-700"
          }`}
          onClick={() => handleTabClick(0)}
        >
          <a className="inline-block py-2 px-4">Home</a>
        </li>
        <li
          className={`-mb-px flex-1 ${
            activeTab === 1
              ? "border-l border-t border-r rounded-t text-blue-700"
              : "border-b border-gray-400 hover:text-blue-700"
          }`}
          onClick={() => handleTabClick(1)}
        >
          <a className="inline-block py-2 px-4">Notes</a>
        </li>
        <li
          className={`-mb-px flex-1 ${
            activeTab === 2
              ? "border-l border-t border-r rounded-t text-blue-700"
              : "border-b border-gray-400 hover:text-blue-700"
          }`}
          onClick={() => handleTabClick(2)}
        >
          <a className="inline-block py-2 px-4">Analyse</a>
        </li>
        <li
          className={`-mb-px flex-1 ${
            activeTab === 3
              ? "border-l border-t border-r rounded-t text-blue-700"
              : "border-b border-gray-400 hover:text-blue-700"
          }`}
          onClick={() => handleTabClick(3)}
        >
          <a className="inline-block py-2 px-4">Sounds</a>
        </li>
        <li
          className={`-mb-px flex-1 ${
            activeTab === 4
              ? "border-l border-t border-r rounded-t text-blue-700"
              : "border-b border-gray-400 hover:text-blue-700"
          }`}
          onClick={() => handleTabClick(4)}
        >
          <a className="inline-block py-2 px-4">Settings</a>
        </li>
      </ul>
      <div className="border-l border-r border-b p-4">
        {activeTab === 0 && (
          <div>
            <Header>Your Pillars</Header>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="p-4 border">
                    <div className="flex justify-center items-center h-24 bg-gray-200">
                      Health
                    </div>
                  </td>
                  <td className="p-4 border">
                    <div className="flex justify-center items-center h-24 bg-gray-200">
                      Work
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border">
                    <div className="flex justify-center items-center h-24 bg-gray-200">
                      Hobby
                    </div>
                  </td>
                  <td className="p-4 border">
                    <div className="flex justify-center items-center h-24 bg-gray-200">
                      Sport
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border">
                    <div className="flex justify-center items-center h-24 bg-gray-200">
                      Family
                    </div>
                  </td>
                  <td className="p-4 border">
                    <div className="flex justify-center items-center h-24 bg-gray-200">
                      Friends
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <Header>Notes of the day</Header>
            <textarea
              className="border border-gray-300 p-2 mb-2 w-full"
              placeholder="Write your thoughts here..."
              value={notes}
              onChange={handleNotesChange}
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleSaveNote}
            >
              Save Note
            </button>
            <div className="mt-4">
              <h3 className="font-semibold">All Notes:</h3>
              <ul>
                {allNotes.map((note, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{note}</span>
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
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <Header>Analyse</Header>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <Header>Sounds</Header>
          </div>
        )}
        {activeTab === 4 && (
          <div>
            <Header>Your Settings</Header>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
