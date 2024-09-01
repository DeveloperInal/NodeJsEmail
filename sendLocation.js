const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/update-location', (req, res) => {
    const locationData = req.body;

    console.log('Received location data:', locationData);

    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 587,
        secure: false,
        auth: {
            user: 'gergoffin',
            pass: 'uzublfhevbvjmyif'
        }
    });

    const mailOptions = {
        from: 'gergoffin@yandex.ru',
        to: 'inal.gergov152@yandex.ru',
        subject: 'Location',
        text: JSON.stringify(locationData, null, 2)
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email', error: error.message });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ message: 'Email sent successfully' });
        }
    });
});

module.exports = router;
