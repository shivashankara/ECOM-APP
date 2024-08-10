import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const store = configureStore({
  reducer: rootReducer,  
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

if (typeof window !== 'undefined') {
  window.store = store.getState(); // Exposing store for debugging
}
export default store;
