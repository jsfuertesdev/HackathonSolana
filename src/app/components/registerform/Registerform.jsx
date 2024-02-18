import './registerform.scss';

function Registerform() {
  return (
    <div className='form-container'>
        <form className='form-register-video' action="">
            <label>Title</label>
            <input className='input-text' type="text" />
            <label>Descripcion</label>
            <input className='input-text' type="text" />
            <label>Imagen</label>
            <input type="image" />
            <label>Video (URL)</label>
            <input className='input-text' type="url" />
            <label>Etiquetas</label>
            <input className='input-text' type="tags" />
            <button className='button-win'>WIN TOKENS</button>
        </form>
    </div>
  )
}

export default Registerform