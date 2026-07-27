import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Project from "./Components/Project"
import About from "./Components/About"
import { Route, Routes } from "react-router-dom"
import NotFound from "./Components/NotFound"
import Mens from "./Components/Mens"
import Courses from "./Pages/Courses"
import CourseDetail from "./Pages/CourseDetail"
import Nav2 from "./Components/Nav2"




const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <Nav2/>

      <Routes>
      <Route path="/Home" element={<Home/>}/>  
      <Route path="/CONTACT" element={<Contact />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Project" element={<Project/>}/>
            <Route path="*" element={<NotFound/>}/>
        <Route path="/Courses" element={<Courses/>}/>
             <Route path="/Project/Mens" element={<Mens/>}/>
            <Route path="/Courses/:CourseId" element={<CourseDetail/>}/>   // dynamic routing
              
      
      
      </Routes>
      

      <Footer className="mt-auto" />
    </div>
  )
}

export default App
