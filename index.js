const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRouter = require("./Routers/userRouter");
const memberRouter = require("./Routers/memberRouter");
const listenerRouter = require("./Routers/listenerRouter");
const converstationRouter = require("./Routers/converstationRouter");
const socket = require("socket.io");
const cors = require("cors");
const messageRouter = require("./Routers/messageRouter");
const { addMessageFun } = require("./Controllers/messageController");

app.use(morgan("tiny"));
app.use(bodyParser.json({ limit: "30mb", extended: "false" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/api/user", userRouter);
app.use("/api/member", memberRouter);
app.use("/api/listener", listenerRouter);
app.use("/api/conversation", converstationRouter);
app.use("/api/message", messageRouter);

mongoose
  .connect(
    "mongodb+srv://Amhere_DB:cTigxiprG7O8diHu@cluster0.h8kthvq.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((res, rej) => console.log("Connect successfully!"))
  .catch((err) => console.log(err.message));

// Amhere_Amhere_DB
// cTigxiprG7O8diHu

const server = app.listen(3000, () => {
  console.log("Server running on port: 3000");
});

const io = require("socket.io")(server, {
  cors: {
    origin: "http://10.3.64.156:3000",
  },
});

const onlineUsers = new Map();

io.on("connection", (socket) => {
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  // console.log(userId);

  socket.on("send-msg", async (data) => {
    const sendToUserSocket = onlineUsers.get(data.receiver);

    console.log(data);

    await addMessageFun(data);
    if (sendToUserSocket) {
      socket.to(sendToUserSocket).emit("msg-receive", data);
    }
  });
});
