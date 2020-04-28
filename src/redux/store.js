import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducer/index'
import logger from './Middlewares/logger'
import thunkMiddleware from 'redux-thunk'

const middlewares = applyMiddleware( thunkMiddleware, logger)

export const store = createStore(reducer, middlewares)

window.store = store;

