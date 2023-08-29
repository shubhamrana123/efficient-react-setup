import { createStoreHook } from "react-redux";
import rootReducers from "./reducers";
// import logger from 'redux-logger';

import thunk from 'redux-thunk'
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
 const store =  createStore(rootReducers,applyMiddleware(thunk))
 export default store