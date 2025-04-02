const nodemailer = require("nodemailer");
require('dotenv').config();
//Nodemailer
//transporter configuration
 const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.SMTP_PASS,
      },
    });

//Send OTP via Email
exports.sendOTPByEmail = (email, otp) => {
  const mailOptions = {
    from: '"Node Project" <' + process.env.SENDER_MAIL + '>',
    to: email,
    subject: "OTP Verification",
    text: `Your OTP: ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};