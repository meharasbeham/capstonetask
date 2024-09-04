import React from 'react'
import logoutimg from './logoutimg.jpg'
import './Logout.css'
import {Link} from 'react-router-dom'



export default function Logout() {
  return (
    <>
    <div>
          <img src={logoutimg} width={"50%"} height={"400px"} className='logout' alt='img'></img>
          
<text>HAVE A NICE DAY</text>
<text>VISIT AGAIN</text>
<button className='bon'><Link  to={"/Login"} >Login</Link></button>
      </div>

          
          </>
  )
}
