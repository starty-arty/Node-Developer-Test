"use strict";

import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";
import config from "../config/config";

const basename = path.basename(__filename);
const db: any = {};

const sequelize = new Sequelize(
  config.databaseConnection.database,
  config.databaseConnection.username,
  config.databaseConnection.password,
  {
    port: config.databaseConnection.port,
    dialect: "mysql",
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
