import { useContext } from "react"
import { ThemeChange } from "../Context/ThemeContext"

const Button = () => {
  const [theme, setTheme] = useContext(ThemeChange)

  const handleClick = () => {
    setTheme(theme === "Light" ? "Dark" : "Light") // toggle
  }

  return (
    <button onClick={handleClick}>
      Change Theme
    </button>
  )
}

export default Button
