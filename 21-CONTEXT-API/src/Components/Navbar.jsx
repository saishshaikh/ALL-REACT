import { useContext } from "react"
import Nav2 from "./Nav2"
import { ThemeChange } from "../Context/ThemeContext"

const Navbar = () => {
  const [theme] = useContext(ThemeChange)

  return (
    <div className={`Nav ${theme}`}>
      <h2>MY SHOP</h2>
      <Nav2 />
    </div>
  )
}

export default Navbar
