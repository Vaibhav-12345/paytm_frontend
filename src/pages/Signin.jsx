import React, { useState } from 'react'
import Header from '../components/Header'
import Subheading from '../components/Subheading'
import Input from '../components/Input'
import Button from '../components/Button'
import Footersubheading from '../components/footersubheading'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const Signin = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const navigate=useNavigate()


  async function signinHandeler() {
    const response=await axios.post('http://localhost:3001/api/v1/user/signin',{
      username:username,
      password:password
    }
    )

    localStorage.setItem('token',response.data.token)
   

    console.log(response.data.token)
    navigate('/dashboard')

    console.log(username,password)
  }



  return (
     <div className='h-screen w-screen bg-[#CCD5E2]  flex items-center justify-center'>
    
     <div className='w-80 bg-zinc-50 p-2 rounded-lg'>

     <Header text='sign in'/>
     <Subheading text='Enter you credentials to access your account' />


      <Input value={username} setname={setusername} text='Email' placeholder='johndoe@gmail.com'/>

      <Input value={password} setname={setpassword} text='Password' placeholder=''/>
       
       <Button onClick={signinHandeler} text='Sign In'/>

        <Footersubheading text="Don't have an account" to='/Sign up'/>

     </div>

    </div>
  )
}

export default Signin