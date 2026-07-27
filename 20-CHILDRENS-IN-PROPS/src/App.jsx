import "./index.css"
import Navbar from "./Components/Navbar"
import { useState } from "react"

export default function App() {
  const[Theme ,SetTheme]=useState("Light")
  return (
  <div>
   <Navbar  Theme={Theme}  SetTheme={"Dark"}/>

   </div>
  )
}
