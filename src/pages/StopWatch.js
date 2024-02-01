import React, { useEffect, useRef, useState } from 'react'

export const StopWatch = () => {

  const [time, SetTime ] = useState(0);

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
    <div>
      <div>
        <h1>{time}</h1>
      </div>
      <div>
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