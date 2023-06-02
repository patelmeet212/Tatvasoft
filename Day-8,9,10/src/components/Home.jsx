import React from 'react'
import Homepage from './Homepage.jpg' 
export default function Home() {
  return (
    <div className='hero container'>
        <div class="card bg-dark text-white">
            <img class="card-img" src={Homepage} alt="Card image" height="550px"/>
            <div class="card-img-overlay">
                <h5>THERE IS NO FRIEND </h5>
                <h1>AS LOYAL AS BOOK.</h1>
            </div>
        </div>
    </div>
  )
}