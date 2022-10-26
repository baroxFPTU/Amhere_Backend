import mongoose, { ObjectId } from 'mongoose';

const { Schema } = mongoose;

const converstationSchema = new Schema({
  users: Array,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  sender: ObjectId,
  receiver: ObjectId,
});

const myDB = mongoose.connection.useDb('User_DB');
export const Converstation = myDB.model('converstation', converstationSchema);
