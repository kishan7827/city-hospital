
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { rootreducer } from './reducers/Rootreducer'
import rootSaga from './saga/Rootsaga'

const sagaMiddleware = createSagaMiddleware()

const Middlewares = [sagaMiddleware, thunk];
export const store = createStore(
    rootreducer,
    applyMiddleware(...Middlewares)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({ type })