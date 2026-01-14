import { useState } from "react"




const App = () => {

  const [Num,SetNum] = useState(0)
   function  increaseNum (){
     SetNum(Num+1)
   }
   function decreseNum () {
     SetNum(Num-1)
   }
   function jumpNum5 () {
     SetNum(Num+5)
   }

  return (
    <>
     <h1>{Num}</h1>
    <div className="btn">
      <br />
      <button onClick={increaseNum}>INCREASE</button>
      <button onClick={decreseNum}>DECREASE</button>
      <button onClick={jumpNum5}>JUMP BY 5</button>
    </div>
    </>
    

  )
}

export default App

