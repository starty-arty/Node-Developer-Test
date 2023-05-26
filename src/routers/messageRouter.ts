import express from "express";
import paginate from "express-paginate";
import MessageController from "../controllers/messageController";
import validate from "../validators";
import {
  createMessageValidator,
  deleteMessageValidator,
  getMessageValidator,
  updateMessageValidator,
} from "../validators/messageValidators";
import config from "../config/config";
import emptyMiddleware from "../middleware/emptyMiddleware";

const cache = require("express-redis-cache")({
  port: config.cacheConnection.port,
});
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

router.get(
  "/all-messages",
  paginate.middleware(
    config.pagination.defaultPageSize,
    config.pagination.maxPageSize
  ),
  config.cacheConnection.isCacheEnabled ? cache.route() : emptyMiddleware,
  messageController.getAllMessages
);

export default router;
