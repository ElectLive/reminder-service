const dotenv = require('dotenv');
dotenv.config();


module.exports = {
  PORT: process.env.PORT || 3004,
  // Add other server configurations here if needed
};