import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISidebar {
  active: boolean;
  width: number;
}

interface IPayload {
  active: boolean | false;
  width: number | 0;
}

const initialState: ISidebar = {
  active: JSON.parse(localStorage.getItem('sidebar') || '{}').active || false,
  width: JSON.parse(localStorage.getItem('sidebar') || '{}').width || 0,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    getSidebarMode: (state) => {
      const sidebar = localStorage.getItem('sidebar');
      if (sidebar) {
        const { active, width } = JSON.parse(sidebar);
        state.active = active;
        state.width = width;
      } else {
        state.active = false;
        state.width = 0;
      }
    },
    setSidebarMode: (state, action: PayloadAction<IPayload>) => {
      state.active = action.payload.active;
      state.width = action.payload.width;
      localStorage.setItem('sidebar', JSON.stringify({
        active: String(action.payload.active),
        width: String(action.payload.width)
      }));
    },
  },
});

export const { getSidebarMode, setSidebarMode } = sidebarSlice.actions;

export default sidebarSlice.reducer;
