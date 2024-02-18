import User from "@/models/Users";
import Sports from "@/models/Sports";
import Exercises from "@/models/Exercises";
import Exercises_use_sports from "@/models/Exercises_use_sports";
import Sequelize from "sequelize";

const getAllExercises = async () => {
  //   const data = await Exercises_use_sports.findAll({
  //     attributes: [],
  //     include: [
  //       {
  //         model: Sports,
  //         attributes: [
  //           [Sequelize.fn("GROUP_CONCAT", Sequelize.col("Sports.name")), "tags"],
  //         ],
  //       },
  //       {
  //         model: Exercises,
  //         attributes: [
  //           "id",
  //           ["name", "title"],
  //           ["video_image", "url"],
  //           "description",
  //         ],
  //         include: [{ model: User, attributes: [["name", "author"]] }],
  //         group: ["Exercises.id", "User.id"],
  //       },
  //     ],
  //   });

  const data = await Exercises_use_sports.findAll({
    attributes: ["id"],
    include: [
      {
        model: Exercises,
        attributes: [["name", "title"], ["video_image", "url"], "description"],
        include: [
          {
            model: User,
            attributes: [["name", "author"]],
          },
        ],
      },
      {
        model: Sports,
        attributes: [
          [Sequelize.fn("GROUP_CONCAT", Sequelize.col("sport.name")), "tags"],
        ],
      },
    ],
    group: ["exercise.id"],
  });

  return data;
};

export default getAllExercises;
