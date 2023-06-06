import React from 'react'
import { Link } from 'react-router-dom'
function Summaryfunc({data}) {
    console.log(data);
  return (
    <>
    {
        data.map((curshow)=>{
            const {language}=curshow.show
            const {original}=curshow.show.image
            const {name}=curshow.show
            const {summary}=curshow.show
            const {id}=curshow.show
            return(
                <tr key={id}>
                    <td>{name}</td>
                    <td>{language}</td>
                    <td><img src={original} width={100}></img></td>
                    <td>{summary}</td>
                    <td><Link to='/book' state={{info:{name,language,original}}}><button><h3>Book</h3></button></Link></td>
                </tr>
                
            )
        })
    }
    
    </>
  )
}

export default Summaryfunc