const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const makeANiceEmail = text => `
  <div className="email" style="
    font-size: 20px;
    border: 2px solid blue;
    padding: 20px;
    font-family: sans-serif;
  ">
    <h3>Hello There</h3>
    <p>${text}</p>

    <p>Best Regards, Eric</p>
  </div>
`;

exports.transport = transport;
exports.makeANiceEmail = makeANiceEmail;
