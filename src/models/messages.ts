"use strict";
import { Model, Sequelize, DataTypes } from "sequelize";

module.exports = (sequelize: Sequelize) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {}
  }

  Messages.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      sender_privileges: {
        type: DataTypes.ENUM("member", "admin"),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sent_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn("current_timestamp"),
      },
    },
    {
      sequelize,
      modelName: "Messages",
      tableName: "messages",
      timestamps: false,
    }
  );

  return Messages;
};
