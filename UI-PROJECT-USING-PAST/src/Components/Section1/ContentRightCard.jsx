

const ContentRightCard = (props) => {
  return (
    
         <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
     <h2 className="bg-white rounded-full  text-xl font-bold h-12 w-12 flex  justify-center items-center">{props.id}</h2>
     <div>
        <p className="text-lg leading-relaxed  text-gray-200 mb-10">Good code balances clarity and efficiency; debugging teaches patience, testing builds confidence, ."

"Writing code is thinking aloud; attention to detail, structured logic</p>
<div className="flex justify-between"><button className="bg-black text-white font-medium px-8 py-2 rounded-full text-lg">{props.tag}</button>
<button className="bg-black text-white font-medium px-3 py-2 rounded-full text-lg"> <i className="ri-arrow-right-line "></i>
</button>
</div>
     </div>
     </div>
      
    
  )
}

export default ContentRightCard
