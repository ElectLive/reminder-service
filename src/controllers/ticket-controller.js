const TicketService = require("../services/email-service")


const create = async (req, res) => {
    try {
        const {subject, content, recepientEmail, status, notificationTime} = req.body;
        const response = await TicketService.createNotification({subject, content, recepientEmail, status, notificationTime});
        res.status(201).json(response);
    } catch (error) {
        console.error('Error creating notification:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

