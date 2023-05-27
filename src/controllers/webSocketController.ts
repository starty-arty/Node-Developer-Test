import { Socket } from "socket.io";
import config from "../config/config";
import WebSocketService from "../services/websocketService";

class WebSocketController {
  webSocketService: WebSocketService;

  constructor() {
    this.webSocketService = new WebSocketService();
  }

  connected = (socket: Socket) => {
    console.log(`WebSocket connection established with ID ${socket.id}`);
    this.configureEvents(socket);
  };

  configureEvents = (socket: Socket) => {
    config.webSocketEvents.forEach((event) => {
      switch (event) {
        case "sendMessage":
          this.webSocketService.configureSendMessageEvent(socket);
          break;
      }
    });
  };
}

export default WebSocketController;
