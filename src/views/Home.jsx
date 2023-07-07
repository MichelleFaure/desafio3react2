import React from 'react'
import charizard from '../img/charizard.png'

const Home = () => {
  return (
    <div className='home'>
        <h1>Bienvenido maestro pokemon</h1>
        <img src={charizard} alt="" />
    </div>
  )
}

export default Home