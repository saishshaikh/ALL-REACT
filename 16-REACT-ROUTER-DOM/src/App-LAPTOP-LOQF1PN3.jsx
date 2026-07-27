import { Route, Routes } from "react-router-dom"
import Home from "./assets/Pages/Home"
import About from "./assets/Pages/About"
import Contact from "./assets/Pages/Contact"
import Navbar from "./Components/Navbar"
import Product from "./assets/Pages/Product"


const App = () => {
  return (
    <div>
      <Navbar />
     

      <Routes>
        
 <Route path="/"  element={<Home />}/>
 <Route path="/About"  element={<About />}/>
  <Route path="/Contact"  element={<Contact />}/>
   <Route path="/Product"  element={<Product />}/>
      </Routes>
    </div>
  )
}

export default App
