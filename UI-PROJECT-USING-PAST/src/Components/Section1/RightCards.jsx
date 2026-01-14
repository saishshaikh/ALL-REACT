
import ContentRightCard from "./ContentRightCard"
const RightCards = (props) => {
  return (
    <div className="h-full w-80  shrink-0 overflow-hidden relative  bg-black rounded-4xl">
        <img  className="h-full w-full object-fill" src={props.img} alt="" />
     <ContentRightCard id ={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCards
 