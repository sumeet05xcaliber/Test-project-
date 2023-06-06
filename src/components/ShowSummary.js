import React from 'react'
import { useLocation } from 'react-router-dom'
import Summaryfunc from './Summaryfunc';
function ShowSummary() {
    const location=useLocation();
    const data=location.state.users;
    
    console.log(data);
    
  return (
    <div>
        <div className='Heading'>
        Movie Valt
        
        </div>
        
        <div className='totaltable'>

        <table className='table'>
            <thead>
                <tr>
                <th>Name</th>
                <th>Language</th>
                <th>Image</th>
                <th>Summary</th>
                <th>Book</th>
                
                </tr>

            </thead>
            <tbody>
                <Summaryfunc data={data}></Summaryfunc>
            </tbody>
        </table>
        
        </div>
        
    </div>
  )
}

export default ShowSummary