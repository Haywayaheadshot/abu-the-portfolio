import { configureStore } from '@reduxjs/toolkit';
import reposReducer from './projects/Projects';
import skillsReducer from './skills/Skills';
import serviceReducer from './services/Services';

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    repos: reposReducer,
    skills: skillsReducer,
    services: serviceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
