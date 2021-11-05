import api from './api'

const userService = {
  login: async ({ email, password }) => {
    const response = await api.post('/auth/login', {
      email,
      password
    })

    return response.error
      ? response
      : response.data
  },

  register: async ({ email, password }) => {
    const response = await api.post('/auth/register', {
      email,
      password
    })

    if (response.error) return response

    return response.data
  }
}

export default userService
