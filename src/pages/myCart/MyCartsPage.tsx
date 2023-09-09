import { useState, useEffect } from "react";
import { removeCartProduct, getCartProducts, addCartProducts, updateAddToCartQty } from "../../services/Auth.service";
import { useNavigate } from "react-router-dom";
import Carts from "../../components/header/Carts";

const MyCartsPage = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const [qtyCount, setQtyCount] = useState(1)
  const navigate = useNavigate()
    
  const handleRemoveSingleCartProduct = async (id:number) => {
    const res = await removeCartProduct(id);
    fetchCartProducts()
  }

  const fetchCartProducts = async () => {
    const res = await getCartProducts(); 
    setCartProduct(res?.data.data)
  }

  const handleAddToCart = async (cartId : any,productId : any,action : string) => {
    if(action === "inc"){
      const productQty = qtyCount;
      const cartData = {
          "product_id" :productId,
          "qty" : productQty
      }
      const res = await addCartProducts(cartData)    
    }else{
      const productQty = 1;
      const cartData = {
          "product_id" :productId,
          "qty" : productQty
      }
      const res = await updateAddToCartQty(cartId,cartData)    
      
    }
    fetchCartProducts()
}

const handleClick = () => {
    navigate('/checkout')
}


useEffect(() => {
    fetchCartProducts()
},[])

  
  const cartTotalPrice = cartProduct.map((item:any)=>item.price).reduce((acc,price)=>acc+price,0);
  return (
    <div>
        <section className=" bg-gray-100 py-12 sm:py-16 lg:py-2">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center">
                <h1 className="text-2xl font-semibold text-gray-900 uppercase">Your Cart</h1>
                </div>

                <div className="mx-auto mt-8 max-w-2xl">
                <div className="bg-white shadow">
                    <div className="px-4 py-6 sm:px-8 sm:py-10">
                    <div className="flow-root">
                        <ul className="-my-8">
                            {
                                cartProduct[0] ? 
                                cartProduct.map((item : any, index : any) => {
                                    return(
                                        <li key={index} className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                         <div className="shrink-0">
                                             <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={item.product.image_url} alt="" />
                                         </div>
    
                                         <div className="relative flex flex-1 flex-col justify-between">
                                             <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                 <div className="pr-8 sm:pr-5">
                                                     <p className="text-base font-semibold text-gray-900">{ item.product.name }</p>
                                                     <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{ item.product.description}</p>
                                                 </div>
    
                                                 <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                     <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">₹ {item.price}</p>
    
                                                     <div className="sm:order-1">
                                                         <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                             <button onClick={() => handleAddToCart(item.id,item.product_id,"dec")} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                                                             <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                                                 {item.qty}
                                                             </div>
                                                             <button onClick={() => handleAddToCart(item.id,item.product_id,"inc")} className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
    
                                          <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                                <button type="button" onClick={() => handleRemoveSingleCartProduct(item.id)} className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                                 <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                                                 </svg>
                                                 </button>
                                             </div>
                                         </div>
                                        </li>
                                    )
                                })
                                :
                                "not add to cart"
                            }
                        </ul>
                    </div>
                    <div className="mt-10 flex border-t items-center justify-between">
                        <p className="text-lg font-bold text-gray-900">Total</p>
                        <p className="w-20 text-lg font-bold text-gray-900 sm:order-2 sm:ml-8 sm:text-right"><span className="px-1">₹</span>{cartTotalPrice}</p>
                    </div>

                    <div className="mt-6 text-center">
                        <button type="button" onClick={handleClick} className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                        Checkout
                        <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MyCartsPage
