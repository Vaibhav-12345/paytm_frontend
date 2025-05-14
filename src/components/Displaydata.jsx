import { useNavigate } from "react-router-dom";
import Circle from "../components/Circle";


const Displaydata = ({user}) => {

   const navigate = useNavigate();
  function sendmoney() {
    navigate(`/send?id=${user._id}&name=${user.username}`);
  }

  return (
    <div className="flex justify-between items-center mx-5 mt-2">
      <div className="flex items-center gap-2">
        <Circle text={user.firstName.slice(0, 1).toUpperCase()} />
        <span>{user.username}</span>
      </div>

      <button
        className="px-3 py-3 bg-black text-white rounded-md cursor-pointer"
        onClick={sendmoney}
      >
        Send money
      </button>
    </div>
  )
}

export default Displaydata