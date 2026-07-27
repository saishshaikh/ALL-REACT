import React from 'react'

const App = () => {
  const Getdata = () => {
    const response = fetch("http://example.com/articles?page[offset]=0")
    console.log(response)
  }

  return (
    <div>
      <button onClick={Getdata}>GetApi</button>
    </div>
  )
}

export default App
