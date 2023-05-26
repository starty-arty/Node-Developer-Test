import { Request, Response, NextFunction } from "express";
import MessageService from "../services/messageService";

class MessageController {
  messageService: MessageService;
  constructor() {
    this.messageService = new MessageService();
  }

  createMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.messageService.createMessage(
        req.body.senderPrivileges,
        req.body.content
      );
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  };
}

export default MessageController;
