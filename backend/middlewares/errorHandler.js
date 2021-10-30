const errorTemplate = (errorCode, errorMessage, errors) => ({
  code: errorCode,
  error: errorMessage,
  errors
})

const handleValidationError = (err, res) => {
  const status = 400
  const errors = Object.values(err.errors).map(error => ({
    field: error.path,
    message: error.message
  }))

  return res
    .status(status)
    .json(errorTemplate(status, 'Validation Error', errors))
    .end()
}

const handleCustomError = (err, res) => {
  const status = err.status
  const errorMessage = err.message

  return res
    .status(status)
    .json(errorTemplate(status, errorMessage))
}

module.exports = (error, req, res, next) => {
  console.error(error)

  if (error.name === 'ValidationError') return handleValidationError(error, res)
  if (error.name === 'CustomError') return handleCustomError(error, res)

  return res
    .status(500)
    .json(errorTemplate(500, 'Unknown Error'))
    .end()
}
