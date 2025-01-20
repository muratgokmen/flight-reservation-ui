import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // doğru yoldan import ediliyor mu kontrol edin

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export default store;