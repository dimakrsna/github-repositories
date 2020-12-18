import { API } from '@services/api'
import { put } from 'redux-saga/effects'
import Actions from '@store/actions'

export function* watchGetRepositories() {
  try {
    const response = yield API.repositories.getRepositories()

    if (response.status === 200) {
      yield put(Actions.repositories.getRepositoriesSuccess(response?.data))
    } else {
      yield put(Actions.repositories.getRepositoriesFailed())
      yield put(Actions.common.setErrorNotify(response?.error?.response?.data?.message || 'Server error'))
    }
  } catch {
    yield put(Actions.repositories.getRepositoriesFailed())
    yield put(Actions.common.setErrorNotify('Server error'))
  }

}