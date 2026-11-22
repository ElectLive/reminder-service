# reminder-service

A reminder / notification-ticket service for the airline booking system. It stores notification tickets and sends them by email on a schedule.

## Tech
- Node.js, Express 5
- MySQL with Sequelize and Sequelize CLI — `NotificationTicket` model
- `node-cron` for the scheduled job, `nodemailer` (Gmail) for sending email

## API endpoints
| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/v1/tickets` | Create a notification ticket |

A notification ticket has `subject`, `content`, `recepientEmail`, `notificationTime`, and a `status` of `PENDING`, `SUCCESS`, or `FAILED` (default `PENDING`).

## How it works
A cron job runs every 5 minutes, fetches pending emails, and sends them via the configured Gmail account.

## How to run
```bash
npm install
cp .env.example .env   # PORT (default 3004), EMAIL_ID, EMAIL_PASSWORD, and MySQL settings
npx sequelize-cli db:migrate
npm start
```

## License
MIT
