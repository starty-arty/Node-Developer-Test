import { Request, Response, NextFunction } from "express";

const emptyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  next();
};
export default emptyMiddleware;
