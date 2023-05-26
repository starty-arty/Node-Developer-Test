import db from "../models";

class messageService {
  createMessage = async (senderPrivileges: string, content: string) => {
    const message = await db.Messages.create({ senderPrivileges, content });
    return { id: message.id };
  };

  getMessage = async (id: number) => {
    const message = await db.Messages.findOne({ where: { id } });
    if (message) return { messageFound: true, data: message.dataValues };
    else return { messageFound: false };
  };

  updateMessage = async (id: number, content: string) => {
    const response = await db.Messages.update({ content }, { where: { id } });
    return { messageFound: !!response[0] };
  };
}

export default messageService;
