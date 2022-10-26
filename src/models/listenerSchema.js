import mongoose from 'mongoose';
const { Schema } = mongoose;

const listenerSchema = new Schema({
  user_id: String,
  categories: [String],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});

const myDB = mongoose.connection.useDb('User_DB');
export const Listener = myDB.model('listener', listenerSchema);
