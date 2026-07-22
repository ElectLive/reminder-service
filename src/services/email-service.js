const sender = require('../config/emailConfig');

const sendEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const mailOptions = {
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody
    };
    await sender.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = {
    sendEmail
};