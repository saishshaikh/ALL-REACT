import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex py-4 px-8 bg-cyan-900 justify-between items-center">
      <h2 className="text-xl font-bold text-white">Saish</h2>

      <div className="flex gap-6 text-white">
        <Link to="/Home" className="hover:text-cyan-300">Home</Link>
        <Link to="/about" className="hover:text-cyan-300">About</Link>
        <Link to="/contact" className="hover:text-cyan-300">Contact</Link>
          <Link to="/Courses" className="hover:text-cyan-300">Courses</Link>
        <Link to="/project" className="hover:text-cyan-300">Project</Link>
        
      </div>
    </nav>
  )
}

export default Navbar
