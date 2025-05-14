
import Circle from './circle'
import { useNavigate } from "react-router-dom";

const Appbar = ({text}) => {

  const navigate = useNavigate();

  function logout(){
    navigate('/')
    localStorage.removeItem('token')
  }
  return (
    <div className='w-full h-15 flex justify-between items-center p-4 
    border-b-2 border-b-zinc-100'>
        <span>PayTM App</span>

        <div className='flex items-center gap-2'>
            <span className='text-lg'>Hello</span>
             <Circle text={text}/>
             <span className='text-green-400 cursor-pointer'><button onClick={logout}>Logout</button></span>
        </div>
    </div>
  )
}

export default Appbar