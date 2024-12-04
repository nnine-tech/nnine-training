const catchAsync = require("../../Utils/catchAsync");
const item = require("../model/ItemModel");

exports.createItem = catchAsync(async (req, res) => {
  const { name, price } = req.body;
  const itemData = await item.create({
    name,
    price,
  });
  console.log(itemData);
  return res.status(200).json({
    message: "item created",
    result: itemData,
  });
});
