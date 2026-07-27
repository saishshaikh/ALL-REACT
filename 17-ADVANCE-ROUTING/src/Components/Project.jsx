import { Link, Outlet } from "react-router-dom"


const Project = () => {
  return (
    <div>
        <div className="flex justify-center gap-10 py-4">
            <Link  className="text-xl font-semibold"to="/project/Mens">Mens</Link>
        </div>
        
      <h1>PROJECT PAGE</h1>
    </div>
  )
}

export default Project
