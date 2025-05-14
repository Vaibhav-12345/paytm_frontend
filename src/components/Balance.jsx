
const Balance = ({balance}) => {
  return (
    <div className="w-full p-6 ">
        <h5 className="font-semibold">Your balance is Rs<span className="mx-1">{balance}</span></h5>
    </div>
  )
}

export default Balance