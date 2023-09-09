import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { addCartProducts } from '../../services/Auth.service';
import Toaster from '../../hooks/Toaster';

interface ICategory {
    id: number;
    offer: any;
    image_url: string;
    name: string;
    description: string;
    price: string;
  }

  interface ICardProps {
    categories: ICategory[];
    currentIndex: number;
  }

const Card = (props:ICardProps) => {
    const { categories, currentIndex} = props


    const [likedCategories, setLikedCategories] = useState<any>([]);

        const handleLike = (index:number) => {
            if(likedCategories.includes(index)){
                setLikedCategories(likedCategories.filter((item:any)=> item != index))
            }else{
                setLikedCategories([...likedCategories, index])
            }
        }

    const handleAddToCart = async (productId : any) => {
        const productQty = 1;
        const cartData = {
            "product_id" :productId,
            "qty" : productQty
        }
        const res = await addCartProducts(cartData)
    }

  return (
    <div>
        <div className="container grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {
                categories?.length >= 0 
                ?
                categories?.map((item,index)=>(
                <div
                    key={`Card_${index}`}
                    className={`${index === currentIndex
                    ? 'border-blue-500'
                    : ''}
                    w-[239px] h-[346px] border-2 rounded-lg relative p-4`}
                    >
                <Link to="/product-details">   
                    {item.offer &&
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                            <div className="bg-green-900 text-slate-100 font-medium rounded-full p-1 text-xs w-10 text-center">{item.offer}</div>
                        </div>
                    }
                    <div className='flex justify-around'>
                        <img
                            src={item.image_url}
                            alt={item.name}
                            className="w-[135.43px] h-[170px]"
                        />
                    </div>
                </Link>
                    <div className='flex justify-between my-2'>
                        <span className="text-sm font-medium text-gray-400 w-44">{item.name}</span>
                        <div><button className='text-2xl cursor-pointer' onClick={() => handleLike(index)}>
                            {likedCategories.includes(index) ? (<AiFillHeart/>) : (<AiOutlineHeart/>)}
                            </button>
                        </div>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <span className="text-sm font-medium w-[162px] h-10">{item.description}</span>
                        <span className="text-sm font-medium">₹{item.price}</span>
                    </div>
                    <div className='mt-4'><button onClick={() => handleAddToCart(item.id)} className='border h-10 w-full border-black hover:bg-[#5A9C17] hover:text-slate-100 hover:border-none text-sm font-bold'>Add to cart</button></div>
                </div>
                ))
                :
                <div className="flex items-center justify-center col-span-6">
                    <h1 className="text-gray-400 text-2xl font-light">Product is Not Found</h1>
                </div>
            }
      </div>
    </div>
  );
};

export default Card;

