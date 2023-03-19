import { configureStore } from '@reduxjs/toolkit';
import projectSlice from './projects/Projects';

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    projects: projectSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
