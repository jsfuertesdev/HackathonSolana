import { DataTypes } from "sequelize";
import sequelize from "../services/database";
import User from "./Users";

const Exercises = sequelize.define(
  "exercises",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    video_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    deleteAt: "detroyTime",
  }
);

User.hasMany(Exercises, {
  foreignKey: {
    name: "id_user",
  },
});

Exercises.belongsTo(User, {
  foreignKey: {
    name: "id_user",
  },
});

export default Exercises;
