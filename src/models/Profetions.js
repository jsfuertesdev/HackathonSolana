import { DataTypes } from "sequelize";
import sequelize from "../services/database";

const Profetions = sequelize.define(
  "profetions",
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

export default Profetions;
