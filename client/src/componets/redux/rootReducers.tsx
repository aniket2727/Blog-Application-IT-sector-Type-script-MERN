// rootReducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import your userSlice or any other slices

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
