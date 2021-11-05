import axios from 'axios'
import env from '../config/env'

const api = axios.create({
  baseURL: env.API_BASE_URL
})

api.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response) {
    if (error.response.status === 500) return { error: true, message: 'An unexpected error occurred, please try again.' }
    return { error: true, message: error.response.data.error, fields: error.response.data.errors || null }
  } else {
    return { error: true, message: 'An unexpected error ocurred during request.' }
  }
})

export default api
