import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '@sagas/index'
import common from '@store/common'

const appReducer = combineReducers({
    common,
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

const sagaMiddleware = createSagaMiddleware()
const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware))
export const store = createStore(rootReducer, compose(...[middlewares]))

sagaMiddleware.run(rootSaga)