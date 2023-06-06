import React from 'react'
import { useLocation } from 'react-router-dom'

function Booking() {
    const location=useLocation();
    const data=location.state.info
  return (
    <>
    <div className='Heading'>
        Movie Valt    
    </div>
    <br></br>
    <div className='Movieinfo'>
        <div className='nameofpic'>
            Name:{data.name}
        </div>
        <div className='langofpic'>
            Language:{data.language}
        </div>
    </div>
    <br>
    </br>

        <div className='bookformpic'>
            Picture: 
            <br></br>
            <img src={data.original} width={200}></img>
        </div>
        <br></br>
        <form className='bookingform'>
            <div className='entername'>
            <label htmlFor='name'>Name: </label>
            <input type='text' id='name'></input>
            </div>
            <br></br>
            <div className='enterage'>
            <label htmlFor='age'>Age:</label>
            <input type='number' id='name'></input>
            </div>
            <br>
            </br>
            <div className='enteraddress'>
            <label htmlFor='address'>Address:</label>
            <input type='text' id='address'></input>
            </div>
            <br>
            </br>
            
            <div className='phone'>
                <label htmlFor='phoneno'>Phone no:</label>
                <input type='text' id='phoneno'></input>

            </div>

        </form>
    </>

  )
}

export default Booking