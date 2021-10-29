const config = require('./utils/config')
const app = require('./app')
const databaseConfig = require('./database/config')

databaseConfig.startConnection(config.MONGODB_URI)

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
