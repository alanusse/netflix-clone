import api from './api'

export default {
  getUserProfiles: async () => {
    const response = await api.get('/profiles')

    return response.error
      ? response
      : response.data
  },

  createProfile: async ({ name }) => {
    const response = await api.post('/profiles', { name })

    return response.error
      ? response
      : response.data
  },

  modifyProfileName: async ({ id, name }) => {
    const response = await api.patch(`/profiles/${id}/name`, { name })

    return response.error
      ? response
      : response.data
  }
}
