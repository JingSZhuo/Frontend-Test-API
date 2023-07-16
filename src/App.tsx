
import React from 'react';

import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter';
import { RootState } from './redux/store';

function App() {
  //const [count, setCount] = useState(0)

  const obj = {
    page: 1,
    itemsPerPage: 20,
    filters: []
  }

  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch();

  const TestFetch = async () => {
    const data = await fetch('http://nyx.vima.ekt.gr:3000/api/books', {
      method: 'POST',
      body: JSON.stringify(obj),
    });
    const toJSON = await data.json();
    console.log("Data: ", toJSON);
  } 

  return (
    <>
      <h1>The counter is {count}</h1>
      <div className="card">
        <button onClick={() => dispatch( decrement() )}>decrement</button>
        <button onClick={() => dispatch( increment() )}>increment</button>
        <button onClick={TestFetch}>Data</button>
      </div>
    </>
  )
}

export default App
