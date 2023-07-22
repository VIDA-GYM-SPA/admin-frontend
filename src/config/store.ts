import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice'
import sidebarSlice from './reducers/sidebarSlice'
import themeSlice from './reducers/themeSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    sidebar: sidebarSlice,
    theme: themeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
