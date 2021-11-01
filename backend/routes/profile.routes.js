const { Router } = require('express')
const router = Router()
const profilesController = require('../controllers/profiles')

// TODO: protect these routes with jwt middleware.
router.post('/', profilesController.createProfile)
router.get('/:id', profilesController.getProfileById)

module.exports = router
