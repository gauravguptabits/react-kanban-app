import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import logger from 'redux-logger';


export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
});