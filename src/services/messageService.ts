import db from "../models";

class messageService {
  createMessage = async (senderPrivileges: string, content: string) => {
    const message = await db.Messages.create({ senderPrivileges, content });
    return { id: message.id };
  };
}

export default messageService;
