import { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import axios from 'axios'
import Users from '../components/Users'
const Dashboard = () => {

  const [balance, setbalance] = useState(0)
  const [name, setname] = useState('')
  useEffect(()=>{

async function getAllUser() {
const response=await axios.get('http://localhost:3001/api/v1/account/balance',{
  headers:{
    token:localStorage.getItem('token')
  }
})
setbalance(response.data.balance)
setname(response.data.name)
}
getAllUser()
  },[])


  return (
    <div className='p-2'>
      <Appbar text={name.slice(0,2).toUpperCase()} />
      <Balance balance={balance.toFixed()}/>
      <Users/>
    </div>
  )
}

export default Dashboard