import BatchManagement from "./BatchManagement";

import ObjectCode from "./ObjectCode";


import { useState } from "react"


const App = () => {

  const [Num,SetNum]=useState([1,2,3,4,5,6])
  const saara = () => {
    const NewNum = [...Num]
    NewNum.push(7,8,9)
    SetNum(NewNum)
  }


  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={saara}>CLICK ME !!</button>
      <ObjectCode />
      <BatchManagement />
    </div>


  )
}

export default App ;
