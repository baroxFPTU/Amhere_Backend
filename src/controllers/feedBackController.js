import feedBack from '../Models/feedBackSchema';

const getFeedBackListener = async (req, res) => {
  const userid = await req.params['userid'];

  try {
    const feedBackList = await feedBack.find({ _id: userid });
    res.status(200).json(feedBackList);
  } catch (error) {
    res.status(400).send();
  }
};

export { getFeedBackListener };
