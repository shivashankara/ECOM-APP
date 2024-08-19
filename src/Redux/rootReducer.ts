// redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import someSliceReducer from './Slices/slice'; // Import your slice reducer

const rootReducer = combineReducers({
  appState: someSliceReducer,
  cartDetails:[]
  // Add other slice reducers here
});

export default rootReducer;
