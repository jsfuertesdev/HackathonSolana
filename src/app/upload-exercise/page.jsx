import "./page.scss";
import ExercisePreview from "./components/exercise-preview/exercise-preview";

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
        <h2>Upload</h2>
      </div>
      <div className="upload-exercise__content">
        <ExercisePreview
          title={data.title}
          author={data.author}
          image={data.url}
          tags={data.tags}
        ></ExercisePreview>
      </div>
    </div>
  );
}

export default page;
