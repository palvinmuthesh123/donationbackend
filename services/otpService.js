const twilio = require("twilio");
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendOTP = async (phone) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000);
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });
    return otp; // Return OTP for validation
  } catch (error) {
    throw new Error("Failed to send OTP");
  }
};
