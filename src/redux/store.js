import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // doğru yoldan import ediliyor mu kontrol edin

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;