const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Process payment
exports.processPayment = catchAsyncErrors(async (req, res, next) => {

  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "cad",
    metadata: {
      company: "VKS Solutions",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

// Send Stripe Key
exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {

  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
