import express, { Application, Request, Response, NextFunction } from "express";
import config from "./config/config";

const app: Application = express();

app.get("/health", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ success: "true" });
  next();
});

app.listen(config.port, () => {
  console.log(`Server up and running on port ${config.port}.`);
});
