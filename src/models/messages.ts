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
        field: "id",
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      senderPrivilege: {
        field: "sender_privilege",
        type: DataTypes.ENUM("member", "admin"),
        allowNull: false,
      },
      content: {
        field: "content",
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sentAt: {
        field: "sent_at",
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
