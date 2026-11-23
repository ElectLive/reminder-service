const sender = require('../config/emailConfig');
const TicketRepository = require("../repository/ticket-repository")

const repo = new TicketRepository()

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

const updateTicket = async(id, data) => {
  try {
    const response = await repo.update(id, data);
    return response;
  } catch (error) {
    console.error('Error updating ticket:', error);
    throw error;
  }
}

const fetchPendingEmails = async() => {
  try {
   const response = await repo.get({status: "PENDING"});
   return response;
  } catch (error) {
    console.error('Error fetching pending emails:', error);
    throw error;
  }
}

const createNotification = async(data) => {
  try {
    const response = await repo.create(data);
    return response;
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
}

module.exports = {
    sendEmail,
    createNotification,
    fetchPendingEmails,
    updateTicket
};
