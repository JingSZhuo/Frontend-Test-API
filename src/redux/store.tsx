import { configureStore } from '@reduxjs/toolkit';
import Books from './features/books';

// Define RootState
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const store = configureStore({
    reducer: {
        books: Books,
    },
});


export default store;
