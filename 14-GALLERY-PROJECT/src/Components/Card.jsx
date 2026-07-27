const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank" rel="noopener noreferrer">
        <div
          className='h-44 w-44 rounded-xl overflow-hidden 
          bg-zinc-900 shadow-lg hover:shadow-green-500/30
          hover:scale-105 transition-all duration-300'
        >
          <img
            className='h-full w-full object-cover'
            src={props.elem.download_url}
            alt=""
          />
        </div>
        <h3 className="text-center mt-2">{props.elem.author}</h3>
      </a>
    </div>
  )
}

export default Card
