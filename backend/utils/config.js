require('dotenv').config()

const MONGODB_URI = process.env.NODE_ENV === 'production'
  ? process.env.MONGODB_URI_PRODUCTION
  : process.env.NODE_ENV === 'development'
    ? process.env.MONGODB_URI_DEVELOPMENT
    : process.env.MONGODB_URI_TEST

module.exports = {
  PORT: Number(process.env.PORT || 3000),
  MONGODB_URI,
  BCRYPT_SALT_ROUNDS: Number(process.env.BCRYPT_SALT_ROUNDS),
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY_TIME: process.env.JWT_EXPIRY_TIME
}
