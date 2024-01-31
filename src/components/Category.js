import React from 'react'
import "../styles/Category.css"
import { Link } from 'react-router-dom'
import Clock_logo from "../assets/Clock_logo.png";

export const Category = () => {
  return (
    <>
    <div className='title'>
      <Link to={'/'} id='logo'><img src={Clock_logo} alt='clock logo'/></Link>        
      <Link to={'/'} id='heading'><h1>Clock</h1></Link> 
    </div>
    <div className='category-container'>
        <Link to={'/stopwatch'}>Stop Watch</Link>
        <Link to={'/timmer'}>Timmer</Link>
        <Link to={'/counter'}>Counter</Link>
    </div>
    </>    
  )
}

export default Category