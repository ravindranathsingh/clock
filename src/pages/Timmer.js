import React, { useEffect, useRef, useState } from 'react'
import "../styles/Timmer.css";

const Timmer = () => {

  const [time, SetTime ] = useState(60);

  useEffect(() => {
    return () => clearInterval(id.current);
  }, [])

  let id = useRef();

  const handleTime = () => {
    id.current = setInterval(() => {
    SetTime((prev) => prev-1)
  }, 1000)
  }

  return (
    <div className='timer-container'>
      <div className='timer'>
        <h1>{time} secs</h1>
      </div>
      <div className='timer-btn'>
        <button onClick={() => handleTime()}>Start</button>
        <button onClick={() => clearInterval(id.current)}>Stop</button>
        <button onClick={() => {
          clearInterval(id.current);
          SetTime(60);          
        }}>Reset</button>
      </div>
    </div>
  )
}

export default Timmer