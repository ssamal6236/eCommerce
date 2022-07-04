const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    address: { type: String, reqired: true },
    city: { type: String, reqired: true },
    province: { type: String, reqired: true },
    country: { type: String, reqired: true },
    pincode: { type: String, reqired: true },
    phone: { type: Number, reqired: true },
  },

  orderItems: [
    {
      name: { type: String, reqired: true },
      price: { type: Number, reqired: true },
      quantity: { type: Number, reqired: true },
      image: { type: String, reqired: true },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  paymentInfo: {
    id: { type: String, reqired: true },
    status: { type: String, reqired: true },
  },

  paidAt: { type: Date, required: true },

  itemsPrice: { type: Number, default: 0, reqired: true },
  taxPrice: { type: Number, default: 0, reqired: true },
  shippingPrice: { type: Number, default: 0, reqired: true },
  totalPrice: { type: Number, default: 0, reqired: true },

  orderStatus: {
    type: String,
    required: true,
    default: "Processing",
  },

  deliveredAt: Date,

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
