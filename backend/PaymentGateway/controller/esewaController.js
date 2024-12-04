const catchAsync = require("../../Utils/catchAsync");
const {
  getEsewaPaymentHash,
  verifyEsewaPayment,
} = require("../esewa");
const item = require("../model/ItemModel");
const Payment = require("../model/PaymentModel");
const PurchasedItem = require("../model/PurchasedItemModel");

exports.initializeEsewaPayment = async (req, res) => {
  const { itemId, totalPrice } = req.body;
  console.log(req.body);
  // Validate request data
  // if (!itemId || !totalPrice) {
  //     return res.status(400).json({ message: "Invalid request data" });
  // }

  const itemData = await item.findOne({
    _id: itemId,
    price: totalPrice,
  });
  console.log(itemData);
  if (!itemData) {
    return res.status(404).json({ message: "Item not found" });
  }
  const purchasedItemData = await PurchasedItem.create({
    item: itemId,
    paymentMethod: "esewa",
    totalPrice: totalPrice,
  });

  const paymentInitate = await getEsewaPaymentHash({
    amount: totalPrice,
    transaction_uuid: purchasedItemData._id,
  });

  return res.status(200).json({
    message: "Initialization successful",
    Payment: paymentInitate,
    purchasedItemData,
  });
};

//complete payment
exports.completePayment = async (req, res) => {
  const { data } = req.query;
  console.log("req", req.query);
  if (!data) {
    return res.status(400).json({ message: "Missing payment data" });
  }

  try {
    // Verify payment with eSewa
    const paymentInfo = await verifyEsewaPayment(data);

    // Find the purchased item using the transaction UUID
    const purchasedItemData = await PurchasedItem.findById(
      paymentInfo.response.transaction_uuid
    );

    if (!purchasedItemData) {
      return res.status(500).json({
        success: false,
        message: "Purchase not found",
      });
    }

    // Create a new payment record in the database
    const paymentData = await Payment.create({
      pidx: paymentInfo.decodedData.transaction_code,
      transactionId: paymentInfo.decodedData.transaction_code,
      productId: paymentInfo.response.transaction_uuid,
      amount: purchasedItemData.totalPrice,
      dataFromVerificationReq: paymentInfo,
      apiQueryFromUser: req.query,
      paymentGateway: "esewa",
      status: "success",
    });

    // Update the purchased item status to 'completed'
    await PurchasedItem.findByIdAndUpdate(
      paymentInfo.response.transaction_uuid,
      { $set: { status: "completed" } }
    );

    // Respond with success message
    res.json({
      success: true,
      message: "Payment successful",
      paymentData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred during payment verification",
      error: error.message,
    });
  }
};
