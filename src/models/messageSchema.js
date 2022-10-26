import mongoose from 'mongoose';

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

const myDB = mongoose.connection.useDb('User_DB');
export const Message = myDB.model('Message', MessageSchema);
