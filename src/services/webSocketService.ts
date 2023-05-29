import { Server, Socket } from "socket.io";
import MessageService from "../services/messageService";

class WebSocketService {
  messageService: MessageService;

  constructor() {
    this.messageService = new MessageService();
  }

  configureSendMessageEvent = (io: Server, socket: Socket) => {
    socket.on("sendMessage", async (senderPrivilege, content) => {
      await this.messageService.createMessage(senderPrivilege, content);
      socket.broadcast.emit("receiveMessage", content);
    });
  };
}

export default WebSocketService;
