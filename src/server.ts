import express, { Application, Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import connectToDatabase from "./database/connector";
import config from "./config/config";
import messageRouter from "./routers/messageRouter";

const app: Application = express();
app.use(bodyParser.json());
app.use("/", messageRouter);

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
