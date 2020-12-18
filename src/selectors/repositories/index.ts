import { createSelector, } from 'reselect'
import { selector, deepEqualSelector } from '../common'

const self = createSelector(selector, data => data.repositories)
const repositories = deepEqualSelector(self, data => data.repositories)
const isRepositoriesReqested = createSelector(self, data => data.isRepositoriesReqested)

export default {
  repositories,
  isRepositoriesReqested,
}