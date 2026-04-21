// redux/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import someSliceReducer from "./Slices/slice"; // Import your slice reducer
import authReducer from "./Slices/authSlice";

const rootReducer = combineReducers({
  appState: someSliceReducer,
  auth: authReducer,
  cartDetails: [],
  // Add other slice reducers here
});

export default rootReducer;
