const mongoose = require("mongoose");
const { Schema } = mongoose;
ObjectId = Schema.ObjectId;

const converstationSchema = new Schema({
  users: Array,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  sender: ObjectId,
  receiver: ObjectId,
});

const myDB = mongoose.connection.useDb("User_DB");
const Converstation = myDB.model("converstation", converstationSchema);

module.exports = Converstation;
