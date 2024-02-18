import Exercises_use_sports from "@/models/Exercises_use_sports";
import Exercises from "@/models/Exercises";
import User from "@/models/Users";
import Sports from "@/models/Sports";

const postNewExercises = async ({ newExercise }) => {
  const author = await User.findOne({
    where: {
      name: newExercise?.author,
    },
  });

  const [exercise, exercise_created] = await Exercises.findOrCreate({
    where: {
      name: newExercise?.title,
      video_image: newExercise?.url,
      description: newExercise?.description,
      id_user: author?.id,
    },
  });

  if (!exercise_created) throw new Error("Exercise exist");
  await exercise.setUser(author?.id);

  for (let index = 0; index < newExercise?.tags.length; index++) {
    const sport = await Sports.findOne({
      where: {
        name: newExercise?.tags[index],
      },
    });

    const [exercises_use_sports, created] =
      await Exercises_use_sports.findOrCreate({
        where: {
          id_exercise: exercise?.id,
          id_sport: sport?.id,
        },
      });

    if (!created) throw new Error("Sport repeat");
    exercises_use_sports.setExercise(exercise?.id);
    exercises_use_sports.setSport(sport?.id);
  }

  return { msg: "Ejercicio creado correctamente" };
};

export default postNewExercises;
