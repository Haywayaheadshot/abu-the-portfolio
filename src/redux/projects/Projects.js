import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [{ name: 'project 1' }],
  },
  reducers: {
    updateProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { updateProjects } = projectSlice.actions;
export default projectSlice.reducer;
