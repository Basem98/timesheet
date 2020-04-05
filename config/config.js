require('dotenv').config();

const config = {
  APP: {
    PORT: process.env.PORT
  },
  DB: {
    URL: process.env.DB_URL
  }
};

module.exports = config;
