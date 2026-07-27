import { useNavigate } from "react-router-dom";

const Nav2 = () => {
  const Navigate = useNavigate();

  return (
    <div className="flex justify-center gap-6 py-5 bg-amber-400 shadow-md">
      <button
        onClick={() => {
          Navigate("/Home");
        }}
        className="
          px-6 py-2
          bg-gray-800 text-white font-semibold
          rounded-xl
          shadow-md
          transition-all duration-200
          hover:bg-yellow-700
          hover:-translate-y-0.5
          active:scale-95
        "
      >
        Go On Home Page...
      </button>

      <button
        onClick={() => {
          Navigate(-1);
        }}
        className="
          px-6 py-2
          bg-gray-800 text-white font-semibold
          rounded-xl
          shadow-md
          transition-all duration-200
          hover:bg-gray-900
          hover:-translate-y-0.5
          active:scale-95
        "
      >
        BACK
      </button>
         <button
        onClick={() => {
          Navigate(+1);
        }}
        className="
          px-6 py-2
          bg-gray-800 text-white font-semibold
          rounded-xl
          shadow-md
          transition-all duration-200
          hover:bg-gray-900
          hover:-translate-y-0.5
          active:scale-95
        "
      >
        Next
      </button>
    </div>
  );
};

export default Nav2;
