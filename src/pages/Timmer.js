import React, { useEffect, useRef, useState } from 'react'

const Timmer = () => {

  const [time, SetTime ] = useState(1000);

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
    <div>
      <div>
        <h1>{time}</h1>
      </div>
      <div>
        <button onClick={() => handleTime()}>Start</button>
        <button onClick={() => clearInterval(id.current)}>Stop</button>
        <button onClick={() => {
          clearInterval(id.current);
          SetTime(1000);          
        }}>Reset</button>
      </div>
    </div>
  )
}

export default Timmer