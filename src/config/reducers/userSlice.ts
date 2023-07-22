import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  avatar: string | Blob | null;
  token: string | null;
  expiresAt: Date | string;
  lastLogin: Date | string;
}

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state) => {
      const user = localStorage.getItem('user');
      if (user) {
        state.user = JSON.parse(user);
      }
    },
    validateToken: (state) => {
      const user = localStorage.getItem('user');
      if (user) {
        state.user = JSON.parse(user);
      }

      if (state.user) {
        const expiresAt = new Date(state.user.expiresAt);
        const now = new Date();
        if (expiresAt < now) {
          state.user = null;
          localStorage.remove('user');
        }
      }
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
      localStorage.setItem('token', action.payload.token || '');
    },
    clearUser: (state) => {
      state.user = null;
      localStorage.remove('user');
      localStorage.remove('token');
    }
  },
})

export const { getUser, validateToken, setUser, clearUser } = userSlice.actions

export default userSlice.reducer
