import { useState } from "react";
import "./App.css";


const App = () => {
  const [Title,SETTitle] = useState("")
  const formhandling= (e) => {
    e.preventDefault()
    console.log ("FORM SUMBITED BY",Title)


    SETTitle("")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formhandling(e)
      }}>
        <input type="text" 
        placeholder="ENTER YOUR NAME"
        value={Title}
        onChange={(e)=>{
          SETTitle (e.target.value)
        }}
        
        />
        
        <button>SUMBIT YOUR FORM</button>
      </form>
      
    </div>
  )
}

export default App
