const errorTemplate = (errorCode, error, errors = []) => ({
  code: errorCode,
  error,
  errors
})

const handleValidationError = (err, res) => {
  const errorCode = 400
  const errors = Object.values(err.errors).map(error => ({
    field: error.path,
    message: error.message
  }))

  return res
    .status(errorCode)
    .json(errorTemplate(errorCode, 'Validation Error', errors))
    .end()
}

module.exports = (error, req, res, next) => {
  console.error(error)

  if (error.name === 'ValidationError') return handleValidationError(error, res)

  return res
    .status(500)
    .json(errorTemplate(500, 'Unknown Error'))
    .end()
}
