import db from "../models";
import { Sequelize } from "sequelize";
import { Transaction, Model } from "sequelize";
import { PaginationDetails } from "../types";

class messageService {
  createMessage = async (senderPrivilege: string, content: string) => {
    const message = await db.Messages.create({ senderPrivilege, content });
    return { id: message.id };
  };

  getMessage = async (id: number) => {
    const message = await db.Messages.findOne({ where: { id } });
    if (message) return { messageFound: true, data: message.dataValues };
    else return { messageFound: false };
  };

  updateMessage = async (id: number, content: string) => {
    const response = await db.sequelize.transaction(async (t: Transaction) => {
      const message = await db.Messages.findOne({
        where: { id },
        transaction: t,
      });
      if (!message) return { messageFound: false };

      await db.Messages.update({ content }, { where: { id }, transaction: t });
      return { messageFound: true };
    });
    return response;
  };

  deleteMessage = async (id: number) => {
    const response = await db.Messages.destroy({ where: { id } });
    return { messageFound: !!response };
  };

  getAllMessages = async (paginationDetails: PaginationDetails) => {
    let response = await db.Messages.findAndCountAll({
      ...paginationDetails,
      order: Sequelize.col("id"),
    });
    response.rows = response.rows.map((row: Model) => row.dataValues);
    return response;
  };
}

export default messageService;
