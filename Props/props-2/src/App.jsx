import React from 'react'
import Card from './Components/Card'
import './index.css'   

function App() {
  return (
    <div className="parent">
      <Card  user= "Saish Shaikh" Branch="Computer Engineering student" img = "https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card  user= "Pranav Surve" Branch="Computer Engineering student" img = "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"/>
      <Card  user= "Mayuri Sangle" Branch="Computer Engineering student" img = "https://images.unsplash.com/photo-1621129357393-76b1a399cdba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     <Card  user= "Sidhant Sable" Branch="Computer Engineering student" img = "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nfGVufDB8fDB8fHww"/>
          <Card  user= "Sheyas Snow" Branch="Computer INFORMATION TECHNOLOGY" img = "https://images.unsplash.com/photo-1604404125020-4e020045c2d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb3dlc3xlbnwwfHwwfHx8MA%3D%3D"/>

    </div>
  )
}

export default App
