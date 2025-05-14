import React from 'react'
import Error from '/Error.gif'
const Error404 = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <img className='h-[50vw] w-[50vw]' src={Error} alt="" />
    </div>
  )
}

export default Error404