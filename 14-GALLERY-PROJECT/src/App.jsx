import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Components/Card'

const App = () => {
  const [Userdata, setUserdata] = useState([])
  const [index, Setindex] = useState(1)

  const GetData = async () => {
    const responce = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`
    )
    setUserdata(responce.data)
    console.log(responce.data)
  }

  useEffect(function () {
    GetData()
  }, [index])

  let printUserData = "NO USER AVAILABLE"

  if (Userdata.length > 0) {
    printUserData = Userdata.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      )
    })
  }

  return (
    <div
      className='bg-gradient-to-br from-black via-zinc-900 to-black 
      min-h-screen p-6 overflow-auto text-white'
    >
      <h1 className='fixed'>{index}</h1>

      <div className='flex flex-wrap gap-6 justify-center'>
        {printUserData}
      </div>

      {/* Prev Next Buttons */}
      <div className='flex justify-center gap-6 items-center p-4'>
        <button
          className='bg-amber-400 text-sm rounded-full text-black px-6 py-3 
          font-semibold cursor-pointer
          hover:bg-amber-500
          active:scale-95
          transition-all duration-200'
          onClick={() => {
            if (index > 1) {
              Setindex(index - 1)
            }
          }}
        >
          Prev
        </button>

        <h3> Page {index}</h3>

        <button
          className='bg-amber-400 text-sm rounded-full text-black px-6 py-3 
          font-semibold cursor-pointer
          hover:bg-amber-500
          active:scale-95
          transition-all duration-200'
          onClick={() => {
            Setindex(index + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
