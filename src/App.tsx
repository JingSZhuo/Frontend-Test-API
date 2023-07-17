
import React, { useEffect } from 'react';

import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './redux/store';

import { getBooks } from './redux/features/books';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

function App() {

  const dispatch: Dispatch<AnyAction> = useDispatch();
  const { books, loading } = useSelector((state: RootState) => state.books.books)

  useEffect(() => {
   dispatch( getBooks() ); 
  }, [])

  
  //console.log('Books:', books); // Check the value of books her

  if (loading) {
    return(
      <div>Loading...</div>
    )
  }

  if (books === undefined) {
    return(
      <div>
        undefined?s
      </div>
    )
  }

  if (!Array.isArray(books)) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="card">
        Data?:
        {books.map((data, key) => {
          return(
            <p key={key}>{data['id']}</p>
          )
        })}
      </div>
    </>
  )
}

export default App
