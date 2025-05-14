import React from 'react'

const Circle = ({text}) => {
  return (
   <span className='  w-9 h-9 rounded-full bg-green-500 flex justify-center items-center'>
     {text}
   </span>
  )
}

export default Circle