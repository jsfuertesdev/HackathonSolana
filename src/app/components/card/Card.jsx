import './card.scss';

function Card() {
  return (
    <div>
      <div className='card-general'>
        <div className='container-img'>
          <img src="https://img.freepik.com/vector-gratis/gente-atletica-practicando-ejercicios-personajes_24877-51334.jpg?size=338&ext=jpg&ga=GA1.1.1488620777.1708214400&semt=ais" alt="exercise" />
        </div>
        <h2>ejercice name</h2>
        <p>Autor name</p>
        <div className='tags-container'>
          <div className='tag'>Cardio</div>
          <div className='tag'>ABS</div>
          <div className='tag'>WEIGHTS</div>
          <div className='tag'>WEIGHTS</div>
          <div className='tag'>WEIGHTS</div>
          <div className='tag'>WEIGHTS</div>
          <div className='tag'>WEIGHTS</div>
          <div className='tag'>WEIGHTS</div>
          <div className='tag'>WEIGHTS</div>
          <div className='tag'>WEIGHTS</div>
          <div className='tag'>WEIGHTS</div>
          <div className='tag'>WEIGHTS</div>
          <div className='tag'>WEIGHTS</div>
          <div className='tag'>WEIGHTS</div>
          <div className='tag'>WEIGHTS</div>
        </div>
      </div>
    </div>
  )
}

export default Card