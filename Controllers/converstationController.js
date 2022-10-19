const Converstation = require("../Models/converstationSchema");
const mongoose = require("mongoose");
const User = require("../Models/userSchema");
const ObjectId = mongoose.Types.ObjectId;

const getConverstationOfMember = async (req, res) => {
  const userid = await req.params["userid"];
  try {
    ConverstatioinInfo = await Converstation.findOne({ member_id: userid });
    res.status(200).json(ListenerInfo);
  } catch (error) {
    res.status(400).send();
  }
};

const getConverstationOfListener = async (req, res) => {
  const userid = await req.params["userid"];
  try {
    ConverstatioinInfo = await Converstation.findOne({ listener_id: userid });
    res.status(200).json(ListenerInfo);
  } catch (error) {
    res.status(400).send();
  }
};

// const addNewConverstation = async (req, res) => {
//   const listener = await { ...req.body };
//   const listenrSave = new Listener(listener);
//   try {
//     await listenrSave.save();
//     res.status(200).send(listenrSave);
//   } catch (error) {
//     res.status(400).send();
//   }
// };

const getChatConverstation = async (req, res) => {
  const { senderId, receiverId } = await req.query;
  Converstation.find();
  const conver = await Converstation.find({
    sender: senderId,
  });

  const ReUserInfo = conver.map(async (item) => {
    const userInfo = await User.findOne({ _id: item.receiver });
    return userInfo;
  });

  console.log(ReUserInfo);

  let listUser = [];

  listUser = await Promise.all(ReUserInfo).then((list) => list);

  console.log(listUser);
  res.status(200).json(listUser);
};

const getChatConverstationForListener = async (req, res) => {
  const { receiverId } = await req.query;

  const conver = await Converstation.find({
    receiver: receiverId,
  });

  const ReUserInfo = conver.map(async (item) => {
    const userInfo = await User.findOne({ _id: item.sender });
    return userInfo;
  });

  console.log(ReUserInfo);

  let listUser = [];

  listUser = await Promise.all(ReUserInfo).then((list) => list);

  console.log(listUser);
  res.status(200).json(listUser);
};

module.exports = {
  getConverstationOfMember,
  getConverstationOfListener,
  getChatConverstation,
  getChatConverstationForListener,
};
