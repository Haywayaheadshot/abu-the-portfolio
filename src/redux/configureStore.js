import { configureStore } from '@reduxjs/toolkit';
import reposSlice from './projects/Projects';

// const reduxLogger = require('redux-logger');

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    repos: reposSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
