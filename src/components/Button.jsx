
const Button = ({text,onClick}) => {
  return (
    <button  onClick={onClick} className="cursor-pointer px-2 py-3 bg-black text-white rounded-lg text-center text-md w-70 mx-2">{text}</button>
  )
}

export default Button