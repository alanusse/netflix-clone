import env from '../config/env'
import axios from 'axios'
import store from '../redux/store'

const api = axios.create({
  baseURL: env.API_BASE_URL
})

const authToken = () => store.getState().user.authorization

api.interceptors.request.use(function (config) {
  config.headers.authorization = authToken()
  return config
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
