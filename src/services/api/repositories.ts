import { axiosInstance } from './index'

export default {
  getRepositories: async () => {
    return await axiosInstance.get(`/repositories`).then(response => {
      return response
    }).catch(error => ({ error }))
  },
}