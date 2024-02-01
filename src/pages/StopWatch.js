import React, { useEffect, useRef, useState } from 'react'
import "../styles/StopWatch.css";

export const StopWatch = () => {

  const [time, SetTime ] = useState(0, false);

  useEffect(() => {
    return () => clearInterval(id.current);
  }, [])

  let id = useRef();

  const handleTime = () => {
    id.current = setInterval(() => {
    SetTime((prev) => prev+1)
  }, 1000)
  }
  
  
  return (
    <div className='sw-container'>
      <div className='stop-watch'>
        <h1>{time} secs</h1>
      </div>
      <div className='sw-btn'>
        <button onClick={() => handleTime()}>Start</button>
        <button onClick={() => clearInterval(id.current)}>Stop</button>
        <button onClick={() => {
          clearInterval(id.current);
          SetTime(0);          
        }}>Reset</button>
      </div>
    </div>
  )
}

export default StopWatch