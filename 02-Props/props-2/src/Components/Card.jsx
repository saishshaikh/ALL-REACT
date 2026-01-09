import React from 'react'

function Card(Props) {
  console.log(Props);
  return (
    <div className='card-container'>
    <div className="card"> <img src={Props.img}  /> 
    <h1>{Props.user}</h1> 
    <p>{Props.Branch}</p> 
    <button>View Profile</button>
     </div>
    </div>
  )
}


export default Card
