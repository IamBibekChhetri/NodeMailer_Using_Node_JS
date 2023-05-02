const { error } = require("console");
const nodemailer = require("nodemailer");

const signup = async (req, res) => {
  // Testing Account
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let message = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "You are Successfully connected with me!", // plain text body
    html: "<b>You are Successfully connected with me!</b>", // html body
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({ msg: "You Should Reveive Message!" });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
  res.status(201).json("Signup successful");
};

const getbill = (req, res) => {
  res.status(201).json("Get Bill successful");
};

module.exports = {
  signup,
  getbill,
};
