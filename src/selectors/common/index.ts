import { createSelectorCreator, defaultMemoize, createSelector } from 'reselect'
import { StoreTypes } from 'src/types'
import isEqual from 'lodash.isequal'

export const selector = createSelector((s: StoreTypes) => s, s => s)
const common = createSelector(selector, data => data.common)
const errorMessage = createSelector(common, data => data.errorMessage)
const successMessage = createSelector(common, data => data.successMessage)

export const deepEqualSelector = createSelectorCreator(
    defaultMemoize,
    isEqual,
)

export default {
    errorMessage,
    successMessage,
}