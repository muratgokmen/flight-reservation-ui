import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        },
        clearToken(state) {
            state.token = null;
        },
        resetState: (state) => {
            return initialState;
        },
    },
});

export const { setToken, clearToken, resetState } = authSlice.actions;
export default authSlice.reducer;
