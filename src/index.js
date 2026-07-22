const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const {sendEmail} = require('./services/email-service'); // Import the email service to ensure it's initialized
const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

    sendEmail('test@example.com', 'Test Email', 'This is a test email.');

  });
}

setupAndStartServer();