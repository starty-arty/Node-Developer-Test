import { Socket } from "socket.io";

class WebSocketService {
  configureSendMessageEvent = (socket: Socket) => {
    socket.on("sendMessage", (senderPrivilege, content) => {
      console.log(
        `sendMessage event triggered: ${senderPrivilege} ${content}.`
      );
    });
  };
}

export default WebSocketService;
