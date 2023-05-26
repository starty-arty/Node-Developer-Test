import express from "express";
import MessageController from "../controllers/messageController";

const router = express.Router();
const messageController = new MessageController();

router.post("/message", messageController.createMessage);
router.get("/message/:id", messageController.getMessage);
router.patch("/message/:id", messageController.updateMessage);

export default router;
