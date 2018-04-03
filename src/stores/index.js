import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import RootReducers from '../reducers/index';


let store = createStore(
  RootReducers,
  {},
  applyMiddleware(thunk, logger)
)

export default store;
