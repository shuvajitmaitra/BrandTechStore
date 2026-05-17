import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  theme: 'light' | 'dark';
};

const initialState: AuthState = {
  theme: 'dark',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleLocalTheme: state => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleLocalTheme } = authSlice.actions;

export default authSlice.reducer;
