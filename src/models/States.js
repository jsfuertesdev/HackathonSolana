import { DataTypes } from "sequelize";
import sequelize from "@/services/database";

const State = sequelize.define(
  "states",
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

export default State;
