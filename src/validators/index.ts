import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) next();
  else {
    res.status(422).json({
      success: false,
      error: errors.array()[0].msg,
    });
  }
};

export default validate;
