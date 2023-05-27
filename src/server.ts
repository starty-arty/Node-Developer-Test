import express, { Application } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import connectToDatabase from "./databaseConnector";
import config from "./config/config";
import messageRouter from "./routers/messageRouter";
import WebSocketController from "./controllers/websocketController";

const app: Application = express();
app.use(bodyParser.json());
app.use("/", messageRouter);

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: config.webSocketOriginWhitelist,
  },
});
const webSocketController = new WebSocketController();
io.on("connect", (socket) => webSocketController.connected(socket));

connectToDatabase().then(() => {
  server.listen(config.port);
  console.log(`Server listening on port ${config.port}.`);
});
