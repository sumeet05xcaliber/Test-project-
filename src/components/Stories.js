import React, { useEffect, useState } from 'react'
import ShowData from './ShowData';
import ShowSummary from './ShowSummary';
import { Link } from 'react-router-dom';
const api="https://api.tvmaze.com/search/shows?q=all"
function Stories() {
    const [users,setUsers]=useState([]);

    const fetchdata=async (url) =>{
        try {
            const res= await fetch(url);
            const data=await res.json();
            if(data.length>0){
                setUsers(data);
            }
            console.log(data);
        } catch (error) {
            // console.error(error);
            <Link to='/error'></Link>
        }
    }
    useEffect(()=>{
        fetchdata(api);
    },[])
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
                <th>Score</th>
                <th>Id</th>
                <th>Language</th>
                <th>Image</th>
                
                </tr>

            </thead>
            <tbody>
                <ShowData users={users}></ShowData>
            </tbody>
        </table>
        
        </div>
        {/* <br></br> */}
        <div className='summarybut'>
        For the summary of above movies click the button below
        <br></br>
        <Link to='/show' state={{users:users}}><button><h3>summary</h3></button></Link>
        </div>
    </div>
  )
}

export default Stories