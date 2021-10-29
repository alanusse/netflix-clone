const bcrypt = require('bcryptjs')
const config = require('./config')

const createHash = password => {
  const saltRounds = bcrypt.genSaltSync(config.BCRYPT_SALT_ROUNDS)
  const generatedHash = bcrypt.hashSync(password, saltRounds)
  return generatedHash
}

const compare = (password, hash) => bcrypt.compareSync(password, hash)

module.exports = {
  createHash,
  compare
}
