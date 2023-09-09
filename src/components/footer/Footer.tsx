import { Link } from "react-router-dom"
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900">
          <div className="container py-6">
              <div className="flex justify-center">
                <div className="grid lg:grid-cols-4 grid-cols-2 2xl:gap-10 gap-y-10">
                  <div className="flex xl:justify-start justify-center">
                    <div>
                        <h2 className="mb-6 sm:text-sm text-xs font-semibold uppercase text-white">Information</h2>
                        <ul className="text-white font-medium sm:text-sm text-xs">
                            <li className="my-2">
                                <Link to="#" className="hover:underline">Store Location</Link>
                            </li>
                            <li className="my-2">
                                <Link to="#" className="hover:underline">Term & Conditions</Link>
                            </li>
                            <li className="my-2">
                                <Link to="#" className="hover:underline">Sitemap</Link>
                            </li>
                            <li className="my-2">
                                <Link to="#" className="hover:underline">Contact Us</Link>
                            </li>
                            <li className="my-2">
                                <Link to="#" className="hover:underline">Refunds & Returns</Link>
                            </li>
                        </ul>
                    </div>
                  </div>
                  <div className="flex xl:justify-start lg:justify-center justify-start">
                    <div>
                      <h2 className="mb-6 sm:text-sm text-xs font-semibold uppercase text-white">About  us</h2>
                      <ul className="text-white font-medium sm:text-sm text-xs">
                          <li className="my-2">
                              <Link to="" className="hover:underline ">Our Story</Link>
                          </li>
                          <li className="my-2">
                              <Link to="" className="hover:underline">General Enquiries</Link>
                          </li>
                          <li className="my-2">
                              <Link to="" className="hover:underline">Contact Us</Link>
                          </li>
                          <li className="my-2">
                              <Link to="" className="hover:underline">FAQs</Link>
                          </li>
                          <li className="my-2">
                              <Link to="" className="hover:underline">Terms & Conditions</Link>
                          </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex xl:justify-start justify-center">
                    <div>
                      <h2 className="mb-6 sm:text-sm text-xs font-semibold uppercase text-white">Shop</h2>
                      <ul className="text-white font-medium sm:text-sm text-xs">
                          <li className="my-2">
                              <Link to="#" className="hover:underline">All Products</Link>
                          </li>
                          <li className="my-2">
                              <Link to="#" className="hover:underline">Special Offers</Link>
                          </li>
                          <li className="my-2">
                              <Link to="#" className="hover:underline">Brands</Link>
                          </li>
                          <li className="my-2">
                              <Link to="#" className="hover:underline">Grocery</Link>
                          </li>
                          <li className="my-2">
                              <Link to="#" className="hover:underline">Daily Needs</Link>
                          </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div>
                      <h2 className="mb-6 sm:text-sm text-xs font-semibold uppercase text-white">Newslatter</h2>
                      <p className="text-white sm:text-sm text-xs">Register now to get updates on promotions & coupons</p>
                      <div className='my-2'>
                        <label className="block absolute">
                          <button className="absolute inset-y-0 right-0 flex items-center px-2 sm:text-sm text-xs bg-black text-white rounded-full">Subscribe</button>
                          <input className="placeholder:italic placeholder:text-slate-500 block rounded-full border-2 border-gray-900 focus:outline-none sm:w-60 w-40 py-2 pl-2 pr-8 sm:text-sm text-xs bg-slate-200" placeholder="Enter your email" type="text" name="search"/>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Epic Grocery 2023. All Rights Reserved</span>
                  <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                      <span className="text-white text-lg"><Link to={'https://www.facebook.com/'}><BsFacebook/></Link></span>
                      <span className="text-white text-lg"><Link to={'https://www.instagram.com/'}><BsInstagram/></Link></span>
                      <span className="text-white text-lg"><Link to={'https://www.youtube.com/'}><BsYoutube/></Link></span>
                      <span className="text-white text-lg"><Link to={'https://www.linkedin.com/'}><BsLinkedin/></Link></span>
                  </div>
              </div>
          </div>
      </footer>
    </>
  )
}

export default Footer