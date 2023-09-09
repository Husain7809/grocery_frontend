import { Disclosure, Menu} from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import AllCategories from './AllCategories'
import NavbarLinks from './NavbarLinks'
import DeliveryLocation from './DeliveryLocation'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import Profile from './Profile'
import { useFormik } from 'formik'
import { searching } from '../../services/Auth.service'



const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const checkLoginUser = () => {
        const login : any = localStorage.getItem('user')
        setIsLoggedIn(login);
        }

        useEffect(() => {
        checkLoginUser()
        }, [])
        
        const [searchResData, setSearchResData] = useState({})
        const navigate = useNavigate()
        const handleClick = () => {
            navigate('/my-carts')
        }

        const formik = useFormik({
            initialValues: {
                search: ''
            },
            onSubmit : async (values) => {
                await searching(values.search)
                .then((res) => {
                if(res){

                    const {data:{data}} :any = res;
                    setSearchResData(data)
                    navigate(`/search/${values.search}`, { state: { data: searchResData, value: values } })
                }else{
                    setSearchResData({})
                }
                
                }) 
                .then((error) => {
                console.log(error);
                })
            }
        })

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="container">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

                {/* All Categories Toggle Dropdown List */}
                    <AllCategories/>
                
                {/* Navbar Link With Clickable Pages */}
                    <NavbarLinks/>

                {/* Delivery and Location */}
                    <DeliveryLocation/>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-12 pt-2">
                <div className=''>
                    <div className=''>
                        {/* Navbar Link Mobile View */}
                        <div className="flex justify-around space-x-3 py-1 sm:hidden">
                            <div className='flex flex-col'>
                                <NavLink to="/" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">Home</NavLink>
                                <NavLink to="/new-products" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">New Products</NavLink>
                                <NavLink to="/shop" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">Shop</NavLink>
                                <NavLink to="/offers" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">Offers</NavLink>
                                <NavLink to="/store-location" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">Store Location</NavLink>
                            </div>
                        </div>
                        <hr className='container'></hr>
                        <div>
                            {/* All Categories Mobile View */}
                            <div className="flex justify-around sm:hidden ps-3 mt-3">
                                <Menu as="div" className="relative text-left">
                                        <Menu.Button className="flex items-center  text-white gap-x-2 text-md font-semibold">All Categories  
                                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-white " aria-hidden="true" />
                                        </Menu.Button>
                                    <Menu.Items className="absolute left-10 z-10 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-xl focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        // className={classNames(
                                                        //     active ? 'bg-gray-800 text-white' : 'text-black',
                                                        //     'block px-4 py-2 text-sm'
                                                        // )}
                                                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-800 text-white' : 'text-black'}`}
                                                    >
                                                        Fruits & Vegetables
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-800 text-white' : 'text-black'}`}
                                                    >
                                                        Premium Fruits
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-800 text-white' : 'text-black'}`}
                                                    >
                                                        Dairy & Bakery
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-800 text-white' : 'text-black'}`}
                                                    >
                                                        Staples
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-800 text-white' : 'text-black'}`}
                                                    >
                                                        Snacks & Branded Foods
                                                    </a>
                                                )}
                                            </Menu.Item>   
                                        </div>
                                    </Menu.Items>
                                </Menu>
                            </div>
                            
                            {/* Login And MyCarts */}
                            <div className='flex justify-around sm:hidden sm:ml-6 sm:static sm:inset-auto sm:pr-0 me-3 mb-3 mt-3'>
                                <div className='space-x-2 lg:flex-row xl:flex-row md:flex'>
                                    <button
                                        type="button"
                                        onClick={handleClick}
                                        className="text-gray-400 hover:text-white focus:outline-none flex md:py-1 ">
                                        <span className="sr-only">View My Carts With Notification</span>
                                        <span className='px-1 font-bold'>My Cart(0)</span>
                                        <img src="/public/icons/my-cart-icon-white.svg" alt="My Cart Icon"/>
                                    </button>
                                <div className='mt-3 flex justify-center'>
                                    {
                                        isLoggedIn ? 
                                        <Profile/> :
                                        <><NavLink to={'/login'}><img src="/public/icons/User-login-icon.svg" alt="My Login Icon"/></NavLink><span className='px-1 font-bold'><NavLink to={'/login'}>Login</NavLink></span></>
                                    }
                                </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                    

                    {/* Search Bar Mobile View*/}
                    {/* <div className='sm:ml-2 sm:hidden'>
                    <label className="block relative ">
                        <input className="placeholder:italic placeholder:text-slate-500 block w-full  border-slate-300 rounded-md py-2 pl-8 pr-2 focus:outline-none sm:text-sm bg-slate-200" placeholder="What are you looking for?" type="text" name="search"/>
                        <button className="absolute inset-y-0 left-1 text-gray-800 flex items-center pr-2 text-xl"><FiSearch/></button>
                        </label>
                    </div> */}

                    {/* Search Bar */}
                    <div>
                        <div className='sm:ml-2 sm:hidden'>
                            <form action="" onSubmit={formik.handleSubmit}>
                                <div className='flex justify-center'>
                                    <label className="block absolute">
                                        <button className="absolute inset-y-0 right-0 flex items-center pr-2 text-2xl"><FiSearch/></button>
                                        <input 
                                        className="placeholder:italic placeholder:text-slate-500 block w-60 border-slate-300 rounded-md py-2 pl-2 pr-8 focus:outline-none sm:text-sm bg-slate-200" 
                                        placeholder="What are you looking for ?" 
                                        type="text" 
                                        name="search"
                                        onChange={formik.handleChange}
                                        value={formik.values.search}
                                        />
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div> 

                </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;