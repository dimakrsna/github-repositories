import { Types } from './actions'
import { ApiTypes } from 'src/types'

export interface State {
  repositories: ApiTypes.Repository[],
  isRepositoriesReqested: boolean | null
}

const initialState: State = {
  repositories: [],
  isRepositoriesReqested: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_REPOSITORIES_REQUEST: {
      return {
        ...state, ...{
          isRepositoriesReqested: true,
        }
      }
    }
    case Types.GET_REPOSITORIES_SUCCESS: {
      return {
        ...state, ...{
          repositories: action.payload,
          isRepositoriesReqested: false,
        }
      }
    }
    case Types.GET_REPOSITORIES_FAILED: {
      return {
        ...state, ...{
          isRepositoriesReqested: false,
        }
      }
    }
    default: return state
  }
}

export default reducer
