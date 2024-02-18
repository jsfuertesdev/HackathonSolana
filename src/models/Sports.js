import { DataTypes } from "sequelize";
import sequelize from "@/services/database";
import Exercises_use_sports from "./Exercises_use_sports";

const Sports = sequelize.define(
  "sports",
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
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    deleteAt: "detroyTime",
  }
);

Sports.hasMany(Exercises_use_sports, {
  foreignKey: {
    name: "id_sport",
  },
});

Exercises_use_sports.belongsTo(Sports, {
  foreignKey: {
    name: "id_sport",
  },
});

export default Sports;
