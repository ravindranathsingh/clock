import React, { useState } from 'react'

const Home = () => {

  const [currentTime, SetCurrentTime ] = useState(new Date().toLocaleTimeString());

  const digitalTime = () => {
    SetCurrentTime(new Date().toLocaleTimeString());
  }

  setInterval(digitalTime, 1000)

  return (
    <div>
      <div>
        <h1>Time is : {currentTime}</h1>
      </div>
    </div>
  )
}

export default Home