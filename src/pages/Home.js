import React, { useState } from 'react'
import "../styles/Home.css"

const Home = () => {

  const [currentTime, SetCurrentTime ] = useState(new Date().toLocaleTimeString());

  const digitalTime = () => {
    SetCurrentTime(new Date().toLocaleTimeString());
  }

  setInterval(digitalTime, 1000)

  return (
    <div className='home-container'>
      <div className='time'>
        <h1>{currentTime}</h1>
      </div>
    </div>
  )
}

export default Home