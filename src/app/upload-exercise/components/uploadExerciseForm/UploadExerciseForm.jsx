import "./uploadExerciseForm.scss";

function UploadExerciseForm() {
  return (
    <div className="upload-exercise__form-container">
      <form className="upload-exercise__form" action="">
        <div className="control-containers">
          <label className="lbl">Title</label>
          <input required className="ipt" type="text" />
        </div>
        <div className="control-containers">
          <label className="lbl">Descripcion</label>
          <textarea required className="ipt textarea" type="text" />
        </div>
        <div className="control-containers">
          <label className="lbl">Imagen (URL)</label>
          <input required className="ipt" type="text" />
        </div>
        <div className="control-containers">
          <label className="lbl">Video (URL)</label>
          <input required className="ipt" type="url" />
        </div>
        <div className="control-containers">
          <label className="lbl">Etiquetas</label>
          <input required className="ipt" type="tags" />
        </div>
        <button className="btn">WIN TOKENS</button>
      </form>
    </div>
  );
}

export default UploadExerciseForm;
