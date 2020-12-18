import { all, takeEvery } from 'redux-saga/effects'
import { Types as RepositoriesTypes } from '@store/repositories/actions'
import { watchGetRepositories } from './repositories'

export function* rootSaga() {
    yield all([
        takeEvery(RepositoriesTypes.GET_REPOSITORIES_REQUEST, watchGetRepositories),
    ])
}