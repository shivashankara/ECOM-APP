import { configureStore } from '@reduxjs/toolkit';
const redux = require('redux') 
import rootReducer from './rootReducer';
import {createLogger} from 'redux-logger';
const applyMiddlware = redux.applyMiddlware;
const thunkmiddleware= require('redux-thunk').default

const logger = createLogger();
const store = configureStore({
  reducer: rootReducer,  
  devTools: process.env.NODE_ENV !== 'production',
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunkmiddleware),
});


export default store;
