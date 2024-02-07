// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './rootReducers';

interface UserState {
  email: string;
  name: string;
  token: string;
}

const initialState: UserState = {
  email: '',
  name: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    clearUserData: (state) => {
      // Clear user data by resetting to initial state
      state.email = initialState.email;
      state.name = initialState.name;
      state.token = initialState.token;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

// Selector to get the entire user data
export const selectUserData = (state: RootState) => state.user;

export default userSlice.reducer;
