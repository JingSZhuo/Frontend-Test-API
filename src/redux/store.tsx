import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter'
import Books from '../redux/books';

// Define RootState
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        counter: counterReducer,
        books: Books,
    }
});

export default store;