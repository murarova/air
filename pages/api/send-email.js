export default function (req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });

  const mailData = {
    from: 'mrs.mursur@gmail.com',
    to: 'murarovalv@gmail.com',
    subject: req.body.subject,
    html: req.body.message
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  })
  res.send('success')
}
