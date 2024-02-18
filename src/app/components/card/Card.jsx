import './card.scss';

function Card({id,title,author,description,exercise, tags}) {
  return (
    <div>
      <div className='card-general'>
        <div className='container-img'>
          <img src={exercise} alt="exercise" />
        </div>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className='tags-container'>
          {tags.map((tag)=>(
            <div className='tag'>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card