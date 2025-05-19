import React, { useState } from 'react'
import Header from '../components/Header'
import Input from '../components/Input'
import Button from '../components/Button'
import Circle from '../components/Circle'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'



  import { ToastContainer, toast } from 'react-toastify';

import { BACKEND_URL } from '../config'

const Sendmoney = () => {
  const [amount, setamount] = useState('')

  const {search}=useLocation()
   let _to=search.split('=')
    const to=_to[1].split('&')

    console.log(to[0])
    console.log(_to[2])
   const navigate=useNavigate()

   async function Tansfermonery() {
    await axios.post(`${BACKEND_URL}api/v1/account/transfer`, {
      to:to[0],
      amount:Number(amount)
    },{
      headers:{
        token:localStorage.getItem('token')
      }
    })

toast.success('🦄 Transfer amount successfully!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});

  setTimeout(()=>{
    navigate('/dashboard')
  },1000)
   }

  return (
    <div className='h-screen w-screen bg-[#CCD5E2]  flex items-center justify-center'>
    
     <div className='w-100 bg-zinc-50 p-10 rounded-lg'>

       <Header text='Send Money'/>
       <hr className='text-zinc-100' />

       <div className='flex items-center gap-2 mt-15'>
        <Circle text={_to[2].slice(0,1).toUpperCase()}/>
        <h5 className='text-3xl'>{_to[2]}</h5>
       </div>
   
       <Input text='Amount (in Rs)' placeholder='Enter amount' setname={setamount} />
       
       <Button text='Initiate Transfer' onClick={Tansfermonery}/>

       <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

        

     </div>



    </div>
  )
}

export default Sendmoney