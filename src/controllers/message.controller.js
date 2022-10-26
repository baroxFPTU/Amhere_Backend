import Message from '../models/messageSchema';
import Converstation from '../models/converstationSchema';
import ObjectId from 'mongodb';

const getAllMessage = async (req, res) => {
  try {
    const { sender, receiver } = req.body;
    const message = await Message.find({
      users: { $all: [sender, receiver] },
    }).sort({ updateAt: 1 });
    res.json(message);
  } catch (error) {
    res.status(400).send();
  }
};

const addMessage = async (req, res) => {
  try {
    const { receiver, sender, message } = req.body;

    let converstationSave = await Converstation.findOne({
      users: { $all: [sender, receiver] },
    });

    if (!converstationSave) {
      converstationSave = new Converstation({
        users: [receiver, sender],
        sender: sender,
        receiver: receiver,
      });
      await converstationSave.save();
    }

    const data = await Message.create({
      message: message,
      users: [receiver, sender],
      sender: sender,
      receiver: receiver,
      converstation_id: converstationSave._id,
    });

    if (data) {
      return res.json({ msg: 'Message addedd successfully' });
    }
    return res.json({ msg: 'Failed to addedd message to database' });
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
};

const addMessageFun = async ({ receiver, sender, message }) => {
  let converstationSave = await Converstation.findOne({
    users: { $all: [sender, receiver] },
  });

  console.log({ converstationSave });

  if (!converstationSave) {
    converstationSave = new Converstation({
      users: [receiver, sender],
      sender: sender,
      receiver: receiver,
    });
    await converstationSave.save();
  }

  const data = await Message.create({
    message: message,
    users: [receiver, sender],
    sender: sender,
    receiver: receiver,
    converstation_id: converstationSave._id,
  });
};

export const MessageController = { getAllMessage, addMessage, addMessageFun };
