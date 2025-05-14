import React from 'react'
import {Link} from 'react-router-dom'

const Footersubheading = ({text,to}) => {
  return (
    <div className='text-center mb-2 mt-2'>
      {text}?
      <Link className='mx-1 underline' to={to==='/'? "/" :"/signup"}>{to==='/' ? "login" : "sign up"}</Link>
     
    </div>
  )
}

export default Footersubheading