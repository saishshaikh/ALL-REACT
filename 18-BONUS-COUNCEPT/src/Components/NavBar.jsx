


const NavBar = (props) => {

  return (
    <div> 
        
<    button onClick={()=>{
    props.SetTheme("DARK")
}}>Theme Change</button>
    </div>
  )
}

export default NavBar
