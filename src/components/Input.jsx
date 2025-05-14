

const Input = ({placeholder,text,value,setname}) => {
  return (
    <div className='mt-2 mb-2 p-2'>
        <h3 className='mb-2'>{text}</h3>
        <input value={value} onChange={(e)=>setname(e.target.value)} className=' border  border-zinc-200 p-2 w-70 rounded-lg' type={text===text ? text: 'password'} placeholder={placeholder} />
    </div>
  )
}

export default Input