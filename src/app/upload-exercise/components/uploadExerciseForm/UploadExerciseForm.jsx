'use client';
import "./uploadExerciseForm.scss";
import MetaMaskButton from "../MetaMaskButton";
import { useForm } from 'react-hook-form';

function UploadExerciseForm({ onChange }) {
  const {  register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(name == 'tags'){
      // const values = value.split[' ']
      onChange(name, value);
    }
    else{
      onChange(name, value);
    }
  };

  // async function onSubmit() {
  //   const formData =   {
  //     "title": "Ejercicio abdominales",
  //     "author": "Amappola",
  //     "description": "Abdominales para tener tu sixpack",
  //     "url": "https://i.pinimg.com/474x/b6/7b/65/b67b65ddaeae39b321933c803940d8af.jpg",
  //     "tags": ["Abs","Cardio","Training"]
  //   };

  //   const response = await fetch('https://kf4z492h-3000.brs.devtunnels.ms/api/exercise', {
  //     method: 'POST',
  //     body: formData,
  //   })

  //   // Handle response if necessary
  //   const data = await response.json()
  //   // ...
  // }

  return (
    <div className="upload-exercise__form-container">
      <form className="upload-exercise__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="control-containers">
          <label className="lbl">Title</label>
          <input required className="ipt" type="text" name="title" onChange={handleInputChange} />
        </div>
        <div className="control-containers">
          <label className="lbl">Descripcion</label>
          <textarea required className="ipt textarea" type="text" name="author"  onChange={handleInputChange} />
        </div>
        <div className="control-containers">
          <label className="lbl">Imagen (URL)</label>
          <input required className="ipt" type="text" name="url"  onChange={handleInputChange} />
        </div>
        <div className="control-containers">
          <label className="lbl">Video (URL)</label>
          <input required className="ipt" type="url" name="url"  onChange={handleInputChange}/>
        </div>
        <div className="control-containers">
          <label className="lbl">Etiquetas</label>
          <input required className="ipt" type="tags" name="tags"  onChange={handleInputChange}/>
        </div>
        {/* <MetaMaskButton /> */}
        {/* <button type="submit" className="btn">WIN TOKENS</button> */}
      </form>
    </div>
  );
}

export default UploadExerciseForm;
