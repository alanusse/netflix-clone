const { Router } = require('express')
const router = Router()
const profilesController = require('../controllers/profiles')

router.post('/', profilesController.createProfile)
router.get('/', profilesController.getUserProfiles)
router.patch('/:id/name', profilesController.modifyProfileName)
router.get('/:id', profilesController.getProfileById)

module.exports = router
