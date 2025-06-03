// test-send.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "office@sewcels.ro",
    pass: "wqgx czjk xabn unra"
  }
});

transporter.sendMail({
  from: '"Apexor Contact" <office@sewcels.ro>',
  to: "office@sewcels.ro",
  subject: "Test Email",
  text: "Merge trimiterea din script?",
}).then(() => {
  console.log("✅ Email trimis!");
}).catch(console.error);