import mongoose from 'mongoose';

const { Schema } = mongoose;

const feedBackSchema = new Schema({
  feedBackListnerId: String,
  feedBackText: String,
  memberFeedBackId: String,
});

const myDB = mongoose.connection.useDb('User_DB');
export const feedBack = myDB.model('feedback', feedBackSchema);
