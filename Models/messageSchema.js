const mongoose = require("mongoose");
const { Schema } = mongoose;

const MessageSchema = new Schema({
  message: {
    type: String,
    require: true,
  },
  users: Array,
  sender: String,
  receiver: String,
});

const myDB = mongoose.connection.useDb("User_DB");
const Message = myDB.model("Message", MessageSchema);

module.exports = Message;
