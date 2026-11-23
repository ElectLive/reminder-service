const { Op } = require('sequelize');
const {NotificationTicket} = require('../models');
class TicketRepository {
    async getAll(){
        try {
            const tickets = await NotificationTicket.findAll();
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async create(data) {
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }

     async update(id, data) {
        try {
            const ticket = await NotificationTicket.findByPk(id);
            if (!ticket) {
                throw new Error(`NotificationTicket with id ${id} not found`);
            }
            if(data.status) 
                ticket.status = data.status;
            await ticket.save();
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async get(filter) {
        try {
            const ticket = await NotificationTicket.findAll({ where: {
                status: filter.status,
                notificationTime: {
                    [Op.lte]: new Date()
                }
            } });
            return ticket;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TicketRepository;
