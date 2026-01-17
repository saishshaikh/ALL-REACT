import { useState } from "react";

const App = () => {
  const [note, setNote] = useState("");
  const [detail, setdetail] = useState("");
  const [notes, setNotes] = useState([]);

  const sumbitHandler = (e) => {
    e.preventDefault();

    const newNote = {
      title: note,
      detail: detail,
    };

    setNotes([...notes, newNote]);

    setNote("");
    setdetail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center p-10">
      
      <form
        onSubmit={sumbitHandler}
        className="flex gap-12 p-10 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl"
      >
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="ENTER YOUR NOTE TITLE"
            className="w-72 px-5 py-3 border border-gray-300 rounded-lg 
                       outline-none text-lg focus:ring-2 focus:ring-black"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <textarea
            placeholder="ENTER NOTE DETAILS"
            className="w-72 h-40 px-5 py-3 border border-gray-300 rounded-lg 
                       outline-none resize-none focus:ring-2 focus:ring-black"
            value={detail}
            onChange={(e) => setdetail(e.target.value)}
          />

          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-lg
                       hover:bg-gray-800 transition-all duration-300"
          >
            ADD NOTE
          </button>
        </div>

        <img
          src="https://static.vecteezy.com/system/resources/previews/049/569/781/non_2x/a-man-writing-on-a-piece-of-paper-vector.jpg"
          alt="notepad"
          className="w-64"
        />
      </form>

      {/* NOTES LIST */}
      <div className="mt-10 max-w-xl w-full">
        {notes.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 mb-4 rounded-xl shadow"
          >
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-gray-700 mt-2">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
