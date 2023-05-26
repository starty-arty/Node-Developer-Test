import express from "express";
import MessageController from "../controllers/messageController";

const router = express.Router();
const messageController = new MessageController();

router.post("/message", messageController.createMessage);

export default router;
