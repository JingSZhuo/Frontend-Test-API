
import { useEffect } from 'react';

import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './redux/store';

import { getBooks } from './redux/features/books';


function App() {

  const dispatch: AppDispatch = useDispatch();
  const { books, loading } = useSelector((state: RootState) => state.books)

  useEffect(() => {
   dispatch( getBooks() ); 
  }, [])

  if (loading) {
    return(
      <div>Loading...</div>
    )
  }
  if (books === undefined) {
    return(
      <div>
        undefined?
      </div>
    )
  }
  if (!Array.isArray(books)) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="card">
        {books.map((data, key) => {
          return(
            <div className='flex flex-row p-2 m-1' key={key}>
              <div className='p-3 ml-2 mr-2'>
                  <p className='text-sm font-normal'>{data['id']}</p>
              </div>  
                
              <div className='p-3 ml-2 mr-2'>
                  <p className='text-sm font-normal'>{data['book_author']}</p>
              </div>  
                
              <div className='p-3 ml-2 mr-2'>
                  <p className='text-sm font-normal'>{data['book_title']}</p>
              </div>  
                
              <div className='p-3 ml-2 mr-2'>
                  <p className='text-sm font-normal'>{data['book_pages']}</p>
              </div>  
                
              <div className='p-3 ml-2 mr-2'>
                  <p className='text-sm font-normal'>{data['book_publication_city']}</p>
              </div>  
                
              <div className='p-3 ml-2 mr-2'>
                  <p className='text-sm font-normal'>{data['book_publication_country']}</p>
              </div>  
                
              <div className='p-3 ml-2 mr-2'>
                  <p className='text-sm font-normal'>{data['book_publication_year']}</p>
              </div>  
                
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
