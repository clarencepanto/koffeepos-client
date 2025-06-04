// socket.js
import { io } from "socket.io-client";

const socket = io("http://localhost:8080", {
  transports: ["websocket", "polling"], // force only WebSocket
  reconnectionAttempts: 5, // try a few times before giving up
});

export default socket;
