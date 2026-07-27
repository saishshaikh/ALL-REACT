


// ##################### API CALING USING FETCH ################################


// import React from 'react'

// const App = () => {
//   const Getdata  = async() => {
//      await fetch("https://api.openbrewerydb.org/breweries?per_page=100")
//     console.log(Response)
//   }

//   return (
//     <div>
//       <button onClick={Getdata}>GetApi</button>
//     </div>
//   )
// }

// export default App



// ######################################## API CALL USING AXIOS #####################################################


import axios from "axios"
import { useState } from "react"



const App = () => {
  const [data,setdata]=useState([])
  const Getdata  = async() => {
    const responce = await axios.get('https://picsum.photos/v2/list')
    setdata(responce.data)

  }

  return (
    <div>
      <button onClick={Getdata}>GetApi</button>
      <div>
  {data.map(function(elem,idx){
    return <h3>Hello{idx},{elem.author}</h3>
  })}


      </div>
      
    </div>
  )
}

export default App
