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
  console.log(__dirname);
});

io.on("connection", (socket) => {
  console.log("a user connected");
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
