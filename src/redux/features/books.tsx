import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

// interface Book {
//     id: string,
//     book_author: string[],
//     book_pages: number,
//     book_publication_city: string,
//     book_publication_country: string,
//     book_publication_year: number,
//     book_title: string,
// }

// interface BooksArray {
//     books: Book[]
// }
// const initialState: BooksArray = {
//     books: []
// }

const obj = {
    page : 1,
    itemsPerPage: 20,
    filters: []
}

export const getBooks = createAsyncThunk('books/getBooks', async () => {
    const response = fetch('http://nyx.vima.ekt.gr:3000/api/books', {
        method: 'POST',
        body: JSON.stringify(obj),
    })
    .then(res => res.json())
    console.log(response)
    return response;
})

export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        loading: false
    },
    extraReducers: {
        [getBooks.pending]: (state) => {
            state.loading = true;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.books = action.payload;
            console.log(action)
            state.loading = false;
        },
        [getBooks.rejected]: (state) => {
            state.loading = false;
        },
    },
    reducers: {}
})

//export const { getBooks } = booksSlice.actions;

export default booksSlice.reducer;