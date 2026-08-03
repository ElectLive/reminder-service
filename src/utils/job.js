const cron = require("'node-cron")
const emailService = require("../services/email-service")
const sender = require('../config/emailConfig');

const setupJobs = () =>{
    cron.schedule('*/5 * * * *', ()=>{
      const response = await emailService.fetchPendingEmails();
      response.forEach((email) =>{
        sender.sendEmail({
          from: "RemainderService@airline.com",
          to: email.recepientEmail,
          subject: email.subject,
          text: email.content
        }, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            }
            else {
                console.log('Email sent:', info.response);
            }
        });
      })
    });
}

module.exports = setupJobs;