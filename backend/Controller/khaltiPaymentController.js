const Payment = require("../Model/paymentModel");
const Product = require("../Model/productModel");
const PurchasedProduct = require("../Model/purchasedProductModel");
const { sendEmail } = require("../Utils/sendMail");
const {
  initializeKhaltiPayment,
  verifyKhaltiController,
} = require("./khaltiController");

exports.initializeKhaltiPaymentController = async (req, res, next) => {
  try {
    const { productId, quantity, price, productName, website_url } = req.body;
    const totalPrice = quantity * price;

    const productData = await Product.find({
      _id: productId,
      quantity: { $gte: quantity },
    });
    if (!productData) {
      return res
        .status(404)
        .json({ message: "Product not found or insufficient quantity" });
    }

    const createPurchasedProduct = await PurchasedProduct.create({
      productId: productId,
      quantity: quantity,
      price: price,
      totalPrice: totalPrice,
    });

    const paymentInitiate = await initializeKhaltiPayment({
      purchase_order_id: createPurchasedProduct._id,
      purchase_order_name: productName,
      amount: totalPrice * 100,
      return_url: `${process.env.BACKEND_URI}/complete-khalti-payment`,
      website_url,
    });
    res.status(200).json({
      message: "Purchase successful",
      paymentInitiate: paymentInitiate,
      createPurchasedProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to initiate Khalti payment",
      error: error.message,
    });
  }
};

exports.completeKhaltiPaymentController = async (req, res, next) => {
  const {
    pidx,
    txnId,
    amount,
    mobile,
    purchase_order_id,
    purchase_order_name,
    transaction_id,
  } = req.query;

  try {
    const paymentInfo = await verifyKhaltiController(pidx);
    if (
      paymentInfo?.status !== "Completed" ||
      paymentInfo.transaction_id !== transaction_id ||
      Number(paymentInfo.total_amount) !== Number(amount)
    ) {
      return res.status(400).json({ message: "Payment failed" });
    }

    const purchasedItem = await PurchasedProduct.find({
      _id: purchase_order_id,
      itemName: purchase_order_name,
      totalPrice: Number(amount),
    });
    if (!purchasedItem) {
      return res.status(404).json({ message: "Purchased item not found" });
    }
    await PurchasedProduct.findByIdAndUpdate(
      purchase_order_id,
      { paymentStatus: "Completed" },
      { new: true }
    );

    const createPayment = await Payment.create({
      transactionId: transaction_id,
      pidx: pidx,
      productId: purchase_order_id,
      amount: Number(amount),
      dataFromVerificationReq: paymentInfo,
      apiQueryFromUser: req.query,
      status: "completed",
    });
    res.status(200).json({
      message: "Payment successful",
      paymentData: createPayment,
    });
    await sendEmail({
      to: `aryandon81@gmail.com`,
      subject: "Payment Completed",
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h1 style="color: #333;">Order Confirmed with complete payment</h1>
        <p style="color: #555;">
        Order have been confirmed with complete payment from Khalti 
        </p>
        <p style="color: #555;">
          Transaction ID: ${transaction_id}<br />
          Purchase Order ID: ${purchase_order_id}<br />
          Purchase Order Name: ${purchase_order_name}<br />
          Amount: ${amount / 100}<br />
          Mobile: ${mobile}<br />
          Pidx: ${pidx}<br />
        </p>

      </div>
    `,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
