import express, { Application, Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { connectToDatabase } from "./database/connector";
import config from "./config/config";

const app: Application = express();
app.get("/health", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ success: "true" });
  next();
});

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: config.webSocketOriginWhitelist,
  },
});
io.on("connection", (socket) => {
  console.log(`WebSocket connection established with socket ID ${socket.id}.`);
});

connectToDatabase().then(() => {
  server.listen(config.port);
  console.log(`Server listening on port ${config.port}.`);
});
