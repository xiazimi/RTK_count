import { configureStore } from '@reduxjs/toolkit';
import counterOneReducer from '../pages/CounterOne/counterOneSlice';
import counterTwoReducer from '../pages/CounterTwo/counterTwoSlice';
import logger from 'redux-logger';


const store = configureStore({
  reducer: {
    counterOne: counterOneReducer,
    counterTwo: counterTwoReducer,
  }, 
  middleware: (getDefaultMiddleware) => {
    console.log('getDefaultMiddleware()', getDefaultMiddleware().prepend('头部添加'));
    console.log('getDefaultMiddleware()', getDefaultMiddleware().concat('尾部添加'));

    return getDefaultMiddleware().concat(logger);
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;