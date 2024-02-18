import { Sequelize } from "sequelize";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_ONLINE_URL, DB_MODE } =
  process.env;

let sequelize;

switch (DB_MODE) {
  case "online":
    sequelize = new Sequelize(DB_ONLINE_URL, {
      dialect: "postgres",
      dialectModule: require("pg"),
      logging: false,
    });
    break;
  case "local":
    sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      dialect: "mysql",
      dialectModule: require("mysql2"),
      logging: false,
      native: false,
    });
    break;
}

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexion exitosa");

    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
})();

export default sequelize;
