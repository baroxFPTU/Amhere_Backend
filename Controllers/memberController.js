const Member = require("../Models/memberSchema");

const getMemberById = async (req, res) => {
  const memberid = await req.params["memberid"];
  try {
    const memberInfo = await Member.findOne({ _id: memberid });
    res.status(200).json(memberInfo);
  } catch (error) {
    res.status(400).send();
  }
};

const addNewMember = async (req, res) => {
  const member = await { ...req.body };
  const memberSave = new Member(member);
  try {
    await memberSave.save();
    res.status(200).send(memberSave);
  } catch (error) {
    res.status(400).send();
  }
};

module.exports = { getMemberById, addNewMember };
