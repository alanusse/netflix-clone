const { Router } = require('express')
const router = Router()
const usersController = require('../controllers/users')

// TODO: add token extractor middleware (to extract jwt from header)
router.get('/:id', usersController.getUserById)

module.exports = router
