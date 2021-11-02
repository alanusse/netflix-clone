const config = require('../utils/config')
const axios = require('axios').default

const TMDBRequest = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: config.TMDB_API_KEY
  }
})

const movieService = {
  ERROR_NAMES: {
    MOVIE_NOT_FOUND: 'MOVIE_NOT_FOUND'
  },

  getTrendingMovies: async () => {
    const { data } = await TMDBRequest.get('/trending/movie/day')
    return data.results
  },

  getMovieById: async function (movieId) {
    try {
      const res = await TMDBRequest.get(`/movie/${movieId}`)
      return res.data
    } catch (error) {
      if (error.response.status === 404) return { failed: true, error: this.ERROR_NAMES.MOVIE_NOT_FOUND }
      throw error
    }
  }
}

module.exports = movieService
