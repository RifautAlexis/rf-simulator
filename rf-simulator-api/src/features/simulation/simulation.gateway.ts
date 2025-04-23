import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway(4800, {
  cors: {
    origin: "*",
  },
})
export class SimulationGateway {
  @WebSocketServer()
  private server: Server;

  emitToClients(event: string, payload: any): void {
    this.server.emit(event, payload);
  }
}
