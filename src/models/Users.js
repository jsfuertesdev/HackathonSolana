import { DataTypes } from "sequelize";
import sequelize from "../services/database";
import State from "./States";
import Profetions from "./Profetions";

const User = sequelize.define(
  "users",
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

    second_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    sure_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    s_sure_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    age: {
      type: DataTypes.BIGINT,
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

State.hasMany(User, {
  foreignKey: {
    name: "id_state",
  },
});

User.belongsTo(State, {
  foreignKey: {
    name: "id_state",
  },
});

Profetions.hasMany(User, {
  foreignKey: {
    name: "id_profetion",
  },
});

User.belongsTo(Profetions, {
  foreignKey: {
    name: "id_profetion",
  },
});

export default User;
