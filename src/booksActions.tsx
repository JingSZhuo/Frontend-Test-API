import { Dispatch } from 'redux';
import { fetchBooksData } from './redux/features/books';
import { createAsyncThunk } from '@reduxjs/toolkit';

const obj = {
    page : 1,
    itemsPerPage: 20,
    filters: []
}

export const TestFetch = createAsyncThunk('api/books', async () => {
    const response = await fetch('http://nyx.vima.ekt.gr:3000/api/books', {
        method: 'POST',
        body: JSON.stringify(obj),
    })
    const data = await response.json()
    console.log(data)
    return data;
})


export const TestFetch2 = async () => {
    const data = await fetch('http://nyx.vima.ekt.gr:3000/api/books', {
      method: 'POST',
      body: JSON.stringify(obj),
    });
    const toJSON = await data.json();
    console.log("Data: ", toJSON['books']);
  } 


