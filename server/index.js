const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

setInterval(function () {
  io.sockets.emit("message", { name: "jjj", message: "kksj" });
  console.log("lll");
}, 5000);

http.listen(4000, function () {
  console.log("listening on port 4000");
});
