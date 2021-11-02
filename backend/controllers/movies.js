const movieService = require('../services/movie.service')
const responseTemplate = require('../utils/responseTemplate')
const CustomError = require('../errors/CustomError')

const errorHandler = (next, data) => {
  switch (data.error) {
    case movieService.ERROR_NAMES.MOVIE_NOT_FOUND:
      throw new CustomError(404, 'Movie does not exist.')

    default:
      return next(data)
  }
}

const controller = {
  getTendingMovies: async (req, res, next) => {
    try {
      const movies = await movieService.getTrendingMovies()
      return res
        .status(200)
        .json(responseTemplate({
          status: 200,
          data: movies
        }))
    } catch (error) {
      return next(error)
    }
  },

  getMovieById: async (req, res, next) => {
    const { id } = req.params

    try {
      const movie = await movieService.getMovieById(id)

      if (movie.failed) return errorHandler(next, movie)

      return res
        .status(200)
        .json(responseTemplate({
          status: 200,
          data: movie
        }))
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = controller
