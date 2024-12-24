import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/UserSlices';
// const store=configureStore({})
const store=configureStore({
    devTools:false,
    reducer:{
     Users:userReducer
    }
})
export default store;