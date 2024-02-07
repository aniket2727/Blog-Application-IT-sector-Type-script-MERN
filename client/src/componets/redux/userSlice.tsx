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
  },
});

export const { setUserData } = userSlice.actions;

// Selector to get the entire user data
export const selectUserData = (state: RootState) => state.user;

export default userSlice.reducer;
