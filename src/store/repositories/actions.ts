import { ApiTypes } from 'src/types'

export enum Types {
  GET_REPOSITORIES_REQUEST = 'GET_REPOSITORIES_REQUEST',
  GET_REPOSITORIES_SUCCESS = 'GET_REPOSITORIES_SUCCESS',
  GET_REPOSITORIES_FAILED = 'GET_REPOSITORIES_FAILED',
}

const getRepositoriesRequest = () => ({
  type: Types.GET_REPOSITORIES_REQUEST
})

const getRepositoriesSuccess = (payload: ApiTypes.Repository[]) => ({
  type: Types.GET_REPOSITORIES_SUCCESS,
  payload
})

const getRepositoriesFailed = () => ({
  type: Types.GET_REPOSITORIES_FAILED
})

export default {
  getRepositoriesRequest,
  getRepositoriesSuccess,
  getRepositoriesFailed,
}