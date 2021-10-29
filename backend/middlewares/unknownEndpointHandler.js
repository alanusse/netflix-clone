module.exports = (req, res, next) => {
  return res
    .status(404)
    .send('unknown endpoint')
}
