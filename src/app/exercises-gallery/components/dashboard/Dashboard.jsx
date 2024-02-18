// "use client";
import "./dashboard.scss";
import Card from "../card/Card";
import data_js from "../../../data/data";
// import { useEffect, useState } from "react";

async function Dashboard() {
  // const [exercises, setExercises] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(
  //       "https://kf4z492h-3000.brs.devtunnels.ms/api/exercise"
  //     );
  //     const data = await res.json();
  //     console.log("DATA", data);
  //     setExercises(data);
  //   })();
  // }, []);

  const exercises = data_js;

  return (
    <div className="dashboard">
      {exercises?.map((exercise) => (
        <Card
          id={exercise.id}
          key={exercise.id}
          title={exercise.title}
          author={exercise.author}
          description={exercise.description}
          exercise={exercise.url}
          tags={exercise.tags}
        />
      ))}
    </div>
  );
}

export default Dashboard;
