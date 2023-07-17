import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Book {        //Each element (book)
    id: string,
    book_author: string[],
    book_pages: number,
    book_publication_city: string,
    book_publication_country: string,
    book_publication_year: number,
    book_title: string,
}
interface BooksArray {   //Books (Array) = []
    books: Book[],
    loading: boolean,
}
const initialState: BooksArray = {
    books: [],
    loading: false,
}
const obj = {
    page : 1,
    itemsPerPage: 20,
    filters: []
}

export const getBooks = createAsyncThunk<BooksArray, void>('books/getBooks', async () => {
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
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.loading = false
                state.books = action.payload.books;
            })
            .addCase(getBooks.rejected, (state) => {
                state.loading = false
            })
    },
    reducers: {}
})

export default booksSlice.reducer;