import { useNavigate } from "react-router-dom"
import { getCartProducts } from "../../services/Auth.service"
import { useEffect, useState } from "react"



const Carts = () => {
  const [temp, setTemp] = useState(0)


  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/my-carts')
  }

  const getCarLengthValue = async () => {
    const res = await getCartProducts()
    const {data : {data}} = res;
    setTemp(data.length)    
    
  }

  
  // useEffect(() => {
  //   setInterval(() => {
  //     getCarLengthValue()
  //   },100)
  // },[])

  return (
    <div>
        <button
            type="button"
            className="text-gray-500 hover:text-black focus:outline-none flex items-center md:py-1 " onClick={handleClick}>
            <span className="sr-only">View My Carts With Notification</span>
            <span className='px-2 font-bold'>My Cart({temp})</span>
            <img src="/public/icons/my-cart-icon.svg" alt="My Cart Icon"/>
        </button>
    </div>
  )
}

export default Carts
