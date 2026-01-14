import RightCards from "./RightCards"

const RightContent = (props) => {
  console.log(props.users)
  return (
    <div id ='right'className='h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto '>
      {props.users.map(function(elem,idx) {
        return <RightCards key={idx}  id={idx+1} img={elem.img} tag= {elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
