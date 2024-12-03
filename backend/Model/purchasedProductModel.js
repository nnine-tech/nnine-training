const { default: mongoose } = require("mongoose");

const PurchasedProductSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Completed", "Cancelled"],
    default: "Pending",
  },
  purchasedDate: {
    type: Date,
    default: Date.now(),
  },
});

const PurchasedProduct = mongoose.model(
  "PurchasedProduct",
  PurchasedProductSchema
);
module.exports = PurchasedProduct;
