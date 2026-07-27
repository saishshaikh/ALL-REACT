
import Nav2 from './Nav2'
const Navbar = (props) => {
  return (
    <div className='Nav'>
      <h2>MY SHOP</h2>
      <Nav2 Theme= {props.Theme}/>
    </div>
  )
}

export default Navbar
