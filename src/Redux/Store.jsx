import { configureStore } from '@reduxjs/toolkit';
import UserLoginReducer from './User/UserLoginSlice';


const store = configureStore({
    reducer: {
        user:UserLoginReducer
    }
})

export default store