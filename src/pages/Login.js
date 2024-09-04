import {useState}from 'react'
import React from 'react'
import imge1 from'./kitchen.webp'
import {Link} from 'react-router-dom'
import './Login.css'
import  axios  from 'axios'


export default function Login() {
const [Email,setEmail]=useState(null)
const [Password,setPassword]=useState(null)
 
const create = (e)=>{ 
  e.preventDefault();
  const data={
  "Email":Email,
  "Password":"Password"

  };
  axios.post("https://capstonedb.onrender.com/api/User/Create",data)

  .then((response)=>console.log(response.data))
  .catch(err=> console.log(err))
   
}
  return (
    <div>
   <nav>
      <form onSubmit={create} className='login'>
      <span>welcome Indian food</span>
      <h1>Create your account</h1><br></br>
    
        <label type="email" className='email'>email:</label>
        <input type='email' className='email'value={Email} required onChange={(e)=>setEmail(e.target.value)}></input><br></br>
        <label type="password"className='password'>password:</label>
        <input type='password'className='password'value={Password} required onChange={(e)=>setPassword(e.target.value)}></input><br></br>     
        <button type="submit"className='sub'
        ><Link  to={"/Login"} >Login</Link></button>
          </form>
          </nav>
        <img src={imge1} width={"90%"} height={"660px"} className='backimg' alt='img'></img>
    </div>
  )
}
