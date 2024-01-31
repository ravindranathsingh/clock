import React, { useState } from 'react'
import "../styles/Counter.css"

export const Counter = () => {
  const [ count, setCount ] = useState(0);

  const Increase = () => {
    setCount(count+1);
  }

  const Decrease = () => {
    setCount(count-1);
  }

  const Clear = () => {
    setCount(0);
  }

  return (
    <div className='counter'>
      <div className='count-value'>
        <input value={count}/>
      </div>
      <div className='action'>
        <button onClick={() => Increase()}>Increase</button>
        <button onClick={() => Decrease()}>Decrease</button>
        <button onClick={() => Clear()}>Clear</button>
      </div>
      
    </div>
  )
}

export default Counter