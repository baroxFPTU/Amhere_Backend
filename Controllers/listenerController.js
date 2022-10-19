const Listener = require("../Models/listenerSchema");

const getListenerById = async (req, res) => {
  const listenerId = await req.params["listenerid"];
  try {
    const ListenerInfo = await Listener.findOne({ _id: listenerId });
    res.status(200).json(ListenerInfo);
  } catch (error) {
    res.status(400).send();
  }
};

const addNewListener = async (req, res) => {
  const listener = await { ...req.body };
  const listenrSave = new Listener(listener);
  try {
    await listenrSave.save();
    res.status(200).send(listenrSave);
  } catch (error) {
    res.status(400).send();
  }
};

module.exports = { getListenerById, addNewListener };
