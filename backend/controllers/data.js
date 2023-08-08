const getAllData = async (req, res) => {
  res.status(200).json({ msg: "I'am get all data" });
};

const getAllDataTesting = async (req, res) => {
  res.status(200).json({ msg: "I'am get all data testing" });
};

module.exports = { getAllData, getAllDataTesting };
