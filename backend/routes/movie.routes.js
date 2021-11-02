const { Router } = require('express')
const router = Router()
const moviesController = require('../controllers/movies')

router.get('/trending', moviesController.getTendingMovies)
router.get('/:id', moviesController.getMovieById)

module.exports = router
