import { useContext } from "react"
import { ThemeChange } from "../Context/ThemeContext"

const Nav2 = () => {
  const [theme] = useContext(ThemeChange)

  return (
    <div className={`Nav2 ${theme}`}>
      <h4>Contact</h4>
      <h4>About</h4>
      <h4>Products</h4>
      <h4>Services</h4>
    </div>
  )
}

export default Nav2
