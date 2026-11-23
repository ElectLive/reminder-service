const cron = require('node-cron');
const emailService = require('../services/email-service');
const { EMAIL_ID } = require('../config/serverConfig');

const setupJobs = () =>{
    cron.schedule('*/5 * * * *', async ()=>{
      try {
        const pendingEmails = await emailService.fetchPendingEmails();
        for (const email of pendingEmails) {
          try {
            await emailService.sendEmail(EMAIL_ID, email.recepientEmail, email.subject, email.content);
            await emailService.updateTicket(email.id, { status: 'SUCCESS' });
          } catch (error) {
            console.error('Error sending email:', error);
            try {
              await emailService.updateTicket(email.id, { status: 'FAILED' });
            } catch (updateError) {
              console.error('Error marking ticket as FAILED:', updateError);
            }
          }
        }
      } catch (error) {
        console.error('Error in reminder job:', error);
      }
    });
}

module.exports = setupJobs;
