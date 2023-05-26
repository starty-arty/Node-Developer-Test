import express from "express";
import MessageController from "../controllers/messageController";
import validate from "../validators";
import {
  createMessageValidator,
  deleteMessageValidator,
  getMessageValidator,
  updateMessageValidator,
} from "../validators/messageValidators";

const router = express.Router();
const messageController = new MessageController();

router.post(
  "/message",
  createMessageValidator,
  validate,
  messageController.createMessage
);

router.get(
  "/message/:id",
  getMessageValidator,
  validate,
  messageController.getMessage
);

router.patch(
  "/message/:id",
  updateMessageValidator,
  validate,
  messageController.updateMessage
);

router.delete(
  "/message/:id",
  deleteMessageValidator,
  validate,
  messageController.deleteMessage
);

router.get("/all-messages", messageController.getAllMessages);

export default router;
