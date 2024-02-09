import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
};

const StoreSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        changeComponent: (state, action) => {
            state.component = action.payload;
            state.history.push(action.payload);
        },
    }});

    const storeReducer = StoreSlice.reducer;

export const { changeComponent } = StoreSlice.actions;

export default storeReducer;