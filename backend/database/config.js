const mongoose = require('mongoose')

const startConnection = (uri) => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('Database connected successfully'))
    .catch(err => {
      console.error('An error ocurred while trying to connect with database')
      console.error(err)
    })
}

const killConnection = () => mongoose.connection.close()

module.exports = {
  startConnection,
  killConnection
}
