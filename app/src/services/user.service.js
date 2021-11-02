import api from './api'

const userService = {
  login: async ({ email, password }) => {
    const response = await api.post('/auth/login', {
      email,
      password
    })

    return response.data
  }
}

export default userService
