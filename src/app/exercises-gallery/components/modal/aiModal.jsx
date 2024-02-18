import './aiModal.scss';

function Card({title, author, exercise, tags}) {
  return (
    <div>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-content">
            <img src="/logo.png" alt="" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card