import axios from "axios";
import Navabar from "./Components/Navabar";
import { useState } from "react";

const App = () => {
  const [data, setdata] = useState([]);

  const GetData = async () => {
    const Response = await axios.get("https://picsum.photos/{width}/{height")


    console.log(Response.product);
  };



    
  return (
    <div className="p-4">
      <Navabar />
      <button
        onClick={GetData}
        className="bg-green-600 text-white px-4 py-2 rounded mt-4 mb-4"
      >
        GET DATA
      </button>

      {/* <div className="flex flex-wrap">{renderedItems}</div> */}
    </div>
  );
};

export default App;
