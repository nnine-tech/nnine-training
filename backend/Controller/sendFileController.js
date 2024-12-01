exports.sendFileController = async (req, res, next) => {
  try {
    let link = `https://admin/example`;
    res.status(200).json({
      success: true,
      message: "File uploads successfully",
      result: link,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
