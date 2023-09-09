import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import TopSelling from '../home/TopSelling'
import { AiFillStar } from 'react-icons/ai'

const ProductDetails = () => {
  return (
    <>
        <div className="product-details container px-2">
            <div className="grid sm:grid-cols-2 lg:gap-36 md:gap-20 sm:gap-10 gap-2">
                <div className="left-content">
                    <div className="md:flex">
                        <div className="hidden md:block">
                            <img src="images/Apple1.svg" alt="product" className="w-20 h-20 border-2 border-gray-100 lg:p-2 mb-6"/>
                            <img src="images/Apple2.svg" alt="product" className="w-20 h-20 border-2 border-gray-100 lg:p-2 mb-6"/>
                            <img src="images/Apple1.svg" alt="product" className="w-20 h-20 border-2 border-gray-100 lg:p-2 mb-6"/>
                            <img src="images/Apple2.svg" alt="product" className="w-20 h-20 border-2 border-gray-100 lg:p-2 mb-6"/>
                        </div>
                        <div className="border-2 border-gray-100 md:w-[520px] md:h-[392px] flex items-center justify-center">
                            <img src="images/Apples.svg" alt="product" className="block" />
                        </div>
                        <div className="md:hidden flex items-end justify-between">
                            <img src="images/Apple1.svg" alt="product" className="w-16 h-16 border-2 border-gray-100 lg:p-2 m-1 mb-6"/>
                            <img src="images/Apple2.svg" alt="product" className="w-16 h-16 border-2 border-gray-100 lg:p-2 m-1 mb-6"/>
                            <img src="images/Apple1.svg" alt="product" className="w-16 h-16 border-2 border-gray-100 lg:p-2 m-1 mb-6"/>
                            <img src="images/Apple2.svg" alt="product" className="w-16 h-16 border-2 border-gray-100 lg:p-2 m-1 mb-6"/>
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <div className="main-content">
                        <h1 className="md:text-2xl md:font-normal font-semibold mb-4">Fresho Apple - Red Delicious, Regular, 4pcs (Approx. 530g - 640g)</h1>
                        <h2 className="text-xs font-medium mb-2"><span className="text-base font-bold mr-4">$4,164.94</span>You Save: 20%(Inclusive of all taxes)</h2>
                        <h3 className="font-medium text-sm text-[#5A9C17] mb-2">In Stock</h3>
                        <h4 className="font-medium text-sm mb-2">Inaugural Offer Free Shipping</h4>
                        <img src="images/visa.svg" alt="visa" className='mb-7'/>
                        <div className='add-to-cart flex items-center mb-7'>
                            <div>
                                <button className='border border-[#5A9C17] h-10 w-64 hover:border-black bg-[#5A9C17] text-white hover:bg-white hover:text-black text-sm font-bold rounded'>Add to cart</button>
                            </div>
                            <div className='ml-4 text-2xl'>
                                <AiOutlineHeart/>
                            </div>
                        </div>
                        <div className='delivery flex item text-sm font-bold mb-4'>
                            <img src="icons/Truk-topNavbar.svg" alt="truck" />
                            <span className='ml-4'>Delivery</span>
                        </div>
                        <div className='pin-code flex items-center justify-between w-60 h-11 bg-[#F1F1F1] p-3 mb-2'>
                            <div className='flex'>
                                <img src="icons/Location-icon copy.svg" alt="location" className='mr-4'/>
                                <span>400020</span>
                            </div>
                            <Link to="#" className='text-[#5A9C17] text-sm font-bold '>Check</Link>
                        </div>
                        <h5 className='text-[#A0A0A0] text-xs font-medium mb-7'>Check for estimated delivery date</h5>
                        <h6 className='text-sm font-bold mb-2'>Offers</h6>
                        <div className='offers'>
                            <div className='flex mb-2'>
                                <img src="icons/offerPercentage.svg" alt="offersPercentage" className='mr-4'/>
                                <span className='text-black text-xs font-medium'>Cashback T&C Apply</span>
                            </div>
                            <div className='flex'>
                                <img src="icons/offerPercentage.svg" alt="offersPercentage" className='mr-4'/>
                                <span className='text-black text-xs font-medium'>AU Bank - 10% Cashback* Up to Rs. 500/- T&C Apply</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className='container my-10'></hr>
        <div className='about-product container px-2'>
            <div className='grid sm:grid-cols-2 lg:gap-36 md:gap-20 gap-10'>
                <div className='left-content'>
                    <div className='about-the-product mb-6'>
                        <h1 className='font-bold text-xl mb-4'>About the Product</h1>
                        <li className='text-sm font-medium mb-2'>The bright red coloured and heart shaped Red juicy and slightly sweet.</li>
                        <li className='text-sm font-medium mb-2'>Red Delicious Apples are a natural source of fibre and are fat free polynutrients.</li>
                        <li className='text-sm font-medium mb-2'>Do not forget to check our delicious fruit recipe</li>
                    </div>
                    <div className='benefits mb-6'>
                        <h1 className='font-bold text-xl mb-4'>Benefits</h1>
                        <li className='text-sm font-medium mb-2'>Apples are one of the healthiest fruits. Rich in vitamin C and system healthy.</li>
                        <li className='text-sm font-medium mb-2'>Protects from Alzheimers, type 2 natural teeth whitener and prevent bad breath.</li>
                        <li className='text-sm font-medium mb-2'>Eating apple peel the risk of obesity. Apple mask is an excellent cure for wrinkles.</li>
                    </div>
                </div>
                <div className='right-content'>
                    <h1 className='font-bold text-xl mb-4'>Product Information</h1>
                    <div className='code mb-6'>
                        <h2 className='text-sm font-base mb-2'><span className='text-sm font-bold'>AN Code: </span>40033824</h2>
                        <h2 className='text-sm font-base mb-2'><span className='text-sm font-bold'>Country of origin: </span>USA</h2>
                    </div>
                    <div className='manufacture-details mb-6'>
                        <h3 className='text-sm font-bold'>Manufacturer Details: </h3>
                        <h2 className='text-sm font-base mb-2'>Epic Grocery Ltd.</h2>
                        <h2 className='text-sm font-base mb-2'>4590 Lang Avenue, Salt Lake City, Utah, United States, 84111.</h2>
                        <h2 className='text-sm font-base mb-2'><span className='text-sm font-bold'>Customer Care No.</span> 1-800-208-2400</h2>
                    </div>
                    <div className='Disclaimer mb-6'>
                        <h3 className='text-sm font-bold'>Disclaimer: </h3>
                        <p className='text-sm font-base mb-2'>Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.</p>
                    </div>
                </div>
            </div>
        </div>
        <hr className='container my-10'></hr>
        <div className='products container'>
            {/* <h1 className='text-xl font-bold'>Don't Forget to Add</h1> */}
            {/* <TopSelling/> */}
        </div>
        <hr className='container my-10'></hr>
        <div className='product-rating container px-2'>
            <div className='container flex justify-between'>
                <h5 className='md:text-xl text-lg font-bold mb-6'>Product Rating</h5>
                <button className='border border-[#5A9C17] h-10 md:w-44 w-32 hover:border-black bg-[#5A9C17] text-white hover:bg-white hover:text-black text-sm font-bold rounded'>Write a review</button>
            </div>
            <h6 className='md:text-6xl text-4xl font-bold mb-1 flex'>4.0/5</h6>
            <div className='rating flex mb-6'>
                <AiFillStar className="text-[#FFB905] text-xl mr-2"/>
                <AiFillStar className="text-[#FFB905] text-xl mr-2"/>
                <AiFillStar className="text-[#FFB905] text-xl mr-2"/>
                <AiFillStar className="text-[#FFB905] text-xl mr-2"/>
                <AiFillStar className="text-[#FFB905] text-xl mr-2"/>
            </div>
            <h5 className='text-xl font-bold flex'>All Review (4)</h5>
        </div>
        <hr className='container my-4'></hr>
        <div className='container review-owner my-10 px-2'>
            <div className=''>
                <div className='left'>
                    <div className='flex justify-between items-center'>
                        <h6 className='text-[#5A9C17] text-base font-bold mb-2'>Cameron Williamson</h6>
                        <span className='text-sm font-medium text-[#9A9A9A]'>5 Jun,2023</span>
                    </div>
                    <div className='max-w-sm'>
                        <h6 className='text-sm font-bold mb-2'>Osk, Totem Credence</h6>
                        <span className='text-sm font-medium mb-2'>Highlay recommand everyone. The matrial is super slight and great for me, but little see througts, so be careful</span>
                    </div>
                </div>
                <div className='flex justify-end'>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetails