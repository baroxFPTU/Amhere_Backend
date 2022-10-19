const mongoose = require("mongoose");
const { Schema } = mongoose;

const listenerSchema = new Schema({
  user_id: String,
  categories: [String],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});

const myDB = mongoose.connection.useDb("User_DB");
const Listener = myDB.model("listener", listenerSchema);

module.exports = Listener;
