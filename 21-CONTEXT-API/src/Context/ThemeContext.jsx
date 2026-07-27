import { createContext, useState } from "react"

// Create context
export const ThemeChange = createContext()

// Provider component
const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("Light") // default theme

  return (
    <ThemeChange.Provider value={[theme, setTheme]}>
      {children}  
    </ThemeChange.Provider>
  )
}

export default ThemeContext
