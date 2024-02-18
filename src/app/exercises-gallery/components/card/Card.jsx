import './card.scss';

function Card({title, author, exercise, tags}) {
  return (
    <div>
      <div className='card__container'>
        <div className='card-image__container'>
          <img src={exercise} alt="exercise" />
        </div>
        <div className="card-content__container">
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
        <div className='tags-container'>
          {tags.map((tag)=>(
            <button className='tag btn'>{tag}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card