import { Request, Response } from "express";
import MessageService from "../services/messageService";

class MessageController {
  messageService: MessageService;

  constructor() {
    this.messageService = new MessageService();
  }

  createMessage = async (req: Request, res: Response) => {
    try {
      const result = await this.messageService.createMessage(
        req.body.senderPrivilege,
        req.body.content
      );
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal server error." });
    }
  };

  getMessage = async (req: Request, res: Response) => {
    try {
      const result = await this.messageService.getMessage(
        Number(req.params.id)
      );
      if (result.messageFound) {
        res.status(200).json({ success: true, data: result.data });
      } else {
        res.status(404).json({ success: false, error: "Message not found." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal server error." });
    }
  };

  updateMessage = async (req: Request, res: Response) => {
    try {
      const result = await this.messageService.updateMessage(
        Number(req.params.id),
        req.body.content
      );
      if (result.messageFound) {
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ success: false, error: "Message not found." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal server error." });
    }
  };

  deleteMessage = async (req: Request, res: Response) => {
    try {
      const result = await this.messageService.deleteMessage(
        Number(req.params.id)
      );
      if (result.messageFound) {
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ success: false, error: "Message not found." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal server error." });
    }
  };

  getAllMessages = async (req: Request, res: Response) => {
    try {
      const paginationDetails = {
        limit: Number(req.query.limit),
        offset: Number(req.skip),
      };

      const result = await this.messageService.getAllMessages(
        paginationDetails
      );
      const pageCount = Math.ceil(result.count / paginationDetails.limit);

      res.status(200).json({
        success: true,
        count: result.count,
        next: res.locals.paginate.hasNextPages(pageCount)
          ? res.locals.paginate.href(false)
          : null,
        previous: res.locals.paginate.hasPreviousPages
          ? res.locals.paginate.href(true)
          : null,
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal server error." });
    }
  };
}

export default MessageController;
