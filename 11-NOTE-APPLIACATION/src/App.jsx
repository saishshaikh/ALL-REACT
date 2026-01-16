const App = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      
      <form className="flex gap-12 p-10 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl">
        
        <div className="flex flex-col gap-5">
          
         
          <input
            type="text"
            placeholder="ENTER YOUR NOTE TITLE"
            className="w-72 px-5 py-3 border border-gray-300 rounded-lg 
                       outline-none text-lg
                       focus:ring-2 focus:ring-black"
          />

          
          <textarea
            placeholder="ENTER NOTE DETAILS"
            className="w-72 h-40 px-5 py-3 border border-gray-300 rounded-lg 
                       outline-none resize-none
                       focus:ring-2 focus:ring-black"
          ></textarea>

          
          <button
            className="px-6 py-3 bg-black text-white rounded-lg
                       hover:bg-gray-800 transition-all duration-300
                       shadow-md"
          >
            ADD NOTE
          </button>
        </div>

       
        <img
          src="https://static.vecteezy.com/system/resources/previews/049/569/781/non_2x/a-man-writing-on-a-piece-of-paper-vector.jpg"
          alt="notepad"
          className="w-64 drop-shadow-2xl"
        />

      </form>
    </div>
  );
};

export default App;
