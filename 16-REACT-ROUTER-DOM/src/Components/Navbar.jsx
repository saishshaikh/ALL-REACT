import { Link } from "react-router-dom"
import "../App.css"

const Navbar = () => {
  return (
    <>
      <h3>SAISH</h3>

      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Product">Product</Link>
      </div>
    </>
  )
}

export default Navbar
