import React from 'react'
import { Link } from 'react-router-dom'
function ErrorHandle() {
  return (
    <div className='errorhandle'>Oh ho seems like you ran into an error 
        <br>
        </br>
        <Link to='/'><button>GO back</button></Link>
    </div>
  )
}

export default ErrorHandle