const { Router } = require('express')
const router = Router()
const authController = require('../controllers/auth')

router.post('/register', authController.registerUser)

module.exports = router
