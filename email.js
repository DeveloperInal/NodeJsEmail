const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 587,
    secure: false,
    auth: {
        user: 'gergoffin',
        pass: 'uzublfhevbvjmyif'
        }
    }
)

const mailOptions = {
    from: 'gergoffin@yandex.ru',
    to: 'inal.gergov152@yandex.ru',
    subject: 'Hello World!',
    text: 'Hello World'
  }

transporter.sendMail(mailOptions)  