import "./page.scss";
import ExercisePreview from "./components/exercise-preview/exercise-preview";
import UploadExerciseForm from "./components/uploadExerciseForm/UploadExerciseForm";

const data = {
  id: 1,
  title: "Ejercicio pantorrilla",
  author: "Sebastian F",
  description: "Pantorilla lenta para problemas de corazón",
  url: "https://i.pinimg.com/474x/b6/7b/65/b67b65ddaeae39b321933c803940d8af.jpg",
  tags: ["GYM", "Crossfit", "Food", "Training"],
};

function page() {
  return (
    <div className="upload-gallery__page">  
      <div className="title">
        <h2>Upload Exercise</h2>
      </div>
      <div className="upload-exercise__content">
        <div className="exercise-preview">
          <ExercisePreview
            title={data.title}
            author={data.author}
            image={data.url}
            tags={data.tags}
          ></ExercisePreview>
        </div>
        <div className="upload-exercise__form">
          <UploadExerciseForm></UploadExerciseForm>
        </div>
      </div>
    </div>
  );
}

export default page;
