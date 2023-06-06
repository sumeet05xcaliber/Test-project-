import React from 'react'
import { Link } from 'react-router-dom'
function ShowData({users}) {
    
  return (
    <>
    {
        users.map((curshow)=>{
            const {score}=curshow
            const {id,language}=curshow.show
            const {original}=curshow.show.image
            const {name}=curshow.show
            
            return(
                <tr key={id}>
                    <td>{name}</td>
                    <td>{score}</td>
                    <td>{id}</td>
                    <td>{language}</td>
                    <td><img src={original} width={100}></img></td>
                    {/* <td><Link to='/book' state={{info:{name,language,original}}}><button><h3>Book</h3></button></Link></td> */} 
                </tr>
            )
        })
    }
    </>
  )
}

export default ShowData