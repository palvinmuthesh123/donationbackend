const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createOrder = async (amount, currency = "INR") => {
  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to paise
      currency,
    });
    return order;
  } catch (error) {
    throw new Error("Payment creation failed");
  }
};
