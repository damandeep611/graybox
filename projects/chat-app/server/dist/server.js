"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const PORT = 8080;
const wss = new ws_1.WebSocketServer({ port: PORT });
console.log(`Websocket server is running at ${PORT}`);
wss.on('connection', function connection(socket) {
    console.log("user connected");
    setTimeout(() => {
        socket.send("Current price of solana is" + Math.random());
    }, 5000);
});
