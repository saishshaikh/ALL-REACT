import { useEffect } from "react"
import "./App.css"

import { useState } from "react"


const App = () => {
  const [a,Seta]=useState(0)
  const [b,Setb]=useState(0)


  function aChanging () {
    console.log("Changing Value of A")
  }


  function bChanging () {
    console.log("B is Changing")
  }

  useEffect (function(){
 aChanging()
},[a])



useEffect (function(){
 bChanging()
},[b])



  return (
    
    <div className="div">
      <h1>{a}</h1>
      <h1>{b}</h1>
     <button onClick={()=>{
      Seta(a+1)
     }}>CHANG A</button> 
     <button onClick={()=>{
      Setb(b-1)
     }}>CHNAG B</button>
    </div>
  )
}

export default App
