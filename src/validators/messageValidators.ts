import { param, body } from "express-validator";
import config from "../config/config";
import SenderPrivileges from "../enums/senderPrivileges";

const idValidator = param("id").isInt().withMessage("id must be an integer.");
const contentValidator = body("content")
  .isString()
  .withMessage("content must be a string.")
  .isLength({ max: config.maxMessageLength })
  .withMessage(
    `content cannot be longer than ${config.maxMessageLength} characters.`
  );
const senderPrivilegesValidator = body("senderPrivileges")
  .isIn(Object.values(SenderPrivileges))
  .withMessage("Invalid senderPrivileges specified.");

export const createMessageValidator = [
  senderPrivilegesValidator,
  contentValidator,
];
export const getMessageValidator = [idValidator];
export const updateMessageValidator = [idValidator, contentValidator];
export const deleteMessageValidator = [idValidator];
