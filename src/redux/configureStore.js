import { configureStore } from '@reduxjs/toolkit';
import projectSlice from './projects/Projects';

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    projects: projectSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// export const { updateProjects } = projectSlice.actions;
export default store;
