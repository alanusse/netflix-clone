const errorTemplate = (errorCode, errorMessage, errors) => ({
  code: errorCode,
  error: errorMessage,
  errors
})

const castErrorTemplate = ({ field, kind, valueType }) => {
  return {
    field: field === '_id' ? 'id' : field,
    message: kind === 'ObjectId'
      ? 'Malformed id.'
      : `Expected a ${kind} but received a ${valueType}`
  }
}

const handleValidationError = (err, res) => {
  const status = 400
  const errors = Object.values(err.errors).map(error => {
    if (error.name === 'CastError') {
      return castErrorTemplate({
        field: error.path,
        kind: error.kind,
        valueType: error.valueType
      })
    } else {
      return {
        field: error.path,
        message: error.message
      }
    }
  })

  return res
    .status(status)
    .json(errorTemplate(status, 'Validation Error', errors))
    .end()
}

const handleCastError = (err, res) => {
  const status = 400
  const errors = [
    castErrorTemplate({
      field: err.path,
      kind: err.kind,
      valueType: err.valueType
    })
  ]

  return res
    .status(status)
    .json(errorTemplate(status, 'Validation Error', errors))
}

const handleCustomError = (err, res) => {
  const status = err.status
  const errorMessage = err.message

  return res
    .status(status)
    .json(errorTemplate(status, errorMessage))
}

module.exports = (error, req, res, next) => {
  process.env.NODE_ENV === 'development' &&
  console.error(error)

  if (error.name === 'ValidationError') return handleValidationError(error, res)
  if (error.name === 'CastError') return handleCastError(error, res)
  if (error.name === 'CustomError') return handleCustomError(error, res)

  process.env.NODE_ENV === 'production' &&
    console.error(error)

  return res
    .status(500)
    .json(errorTemplate(500, 'Unknown Error'))
}
