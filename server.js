const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static("public"));
io.on("connection",(socket)=>{
    socket.on("chat message",(data)=>{
        io.emit("chat message", data);
    });
});

server.listen(5000,"0.0.0.0", ()=>{
    console.log("server started successfully");
});