const app = require("express")();
const http = require("http").createServer(app);
const helmet = require("express");
const cors = require("cors");
const morgan = require("morgan");
const io = require("socket.io")(http);

app.use(helmet());
app.use(cors());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", (socket) => {
  socket.broadcast.emit("join", "Name"); //İsim alınacak vealınan isim ile sohbet edilecek
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});
