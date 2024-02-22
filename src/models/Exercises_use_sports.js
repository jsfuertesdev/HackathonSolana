import { DataTypes } from "sequelize";
import sequelize from "../services/database";
import Exercises from "./Exercises";

const Exercises_use_sports = sequelize.define(
  "exercises_use_sports",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    deleteAt: "detroyTime",
  }
);

Exercises.hasMany(Exercises_use_sports, {
  foreignKey: {
    name: "id_exercise",
  },
});

Exercises_use_sports.belongsTo(Exercises, {
  foreignKey: {
    name: "id_exercise",
  },
});

export default Exercises_use_sports;
