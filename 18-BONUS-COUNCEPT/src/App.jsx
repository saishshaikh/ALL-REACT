import NavBar from "./Components/NavBar"
import { useState } from "react"

const App = () => {
  const[Theme,SetTheme]=useState("Light")
  return (
    <div>
      <h1>CHANGE YOUR {Theme}</h1>
      <NavBar  Theme={Theme} SetTheme={SetTheme} />
    </div>
  )
}

export default App
