exports.sendFileController = async (req, res, next) => {
  try {
    let link = `http://localhost:8000/${req.file.filename}`;
    res.status(200).json({
      success: true,
      message: "File has been uploaded successfully",
      result: link,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
