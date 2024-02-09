import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './slices/PostSlice';

const rootReducer = ({
    posts: postsReducer
});

const store = configureStore({ reducer: rootReducer });

export default store;