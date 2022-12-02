const dotenv = require('dotenv')

dotenv.config()

module.exports.env = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI,
  DB_NAME: process.env.DB_NAME,
  SOCKET_CONNECTOR: process.env.SOCKET_CONNECTOR
}
