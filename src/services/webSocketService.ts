import { Server, Socket } from "socket.io";

class WebSocketService {
  configureSendMessageEvent = (io: Server, socket: Socket) => {
    socket.on("sendMessage", (senderPrivilege, content) => {
      socket.broadcast.emit("receiveMessage", content);
    });
  };
}

export default WebSocketService;
