
import { useParams } from "react-router-dom"
const CourseDetail = () => {
     const params =useParams()
     console.log(params.CourseId)
  return (
  
    <div> 
      <h1>{params.CourseId}CourseDetail Page</h1>
    </div>
  )
}

export default CourseDetail
