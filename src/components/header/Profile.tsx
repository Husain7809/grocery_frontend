import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()
    const checkLoginUser = () => {
      const login : any = localStorage.getItem('user')
      const userDetails = login ? JSON.parse(login) : null
      setIsLoggedIn(userDetails);
    }
    const {data}:any = isLoggedIn;
    const FirstName = data?.first_name
    const LastName = data?.last_name
    const initials = FirstName?.charAt(0) + LastName?.charAt(0) || ""
    
    
    const handleLogout = () => {
      localStorage.removeItem('user');
      setIsLoggedIn(false);
    };

    useEffect(() => {
      checkLoginUser()
    }, [])

    const handleEdit = () => {
      const fatchID = localStorage.getItem('user')
      console.log("Fatch Id=>",fatchID);
      
      navigate(`/create/${fatchID}`)
    }

  return (
    <div>
      <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full hover:shadow-sm hover:shadow-black bg-gray-800 text-sm">
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full flex items-center justify-center uppercase bg-gray-800 text-white">
                        {initials}
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute -left-10 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <p className='capitalize px-4 text-md font-semibold text-gray-600'>{data?.first_name} {data?.last_name}</p>
                      </Menu.Item>
                      <Menu.Item>
                        <p className='px-4 pb-2 text-sm font-semibold text-gray-500 border-b shadow-sm'>{data?.email}</p>
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-800 text-white' : ''}`}
                            onClick={handleEdit}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/manage-addresses"
                            className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-800 text-white' : ''}`}
                            onClick={handleEdit}
                          >
                            Manage Addresses
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-800 text-white' : ''}`}
                          >
                            Your Wish List
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/change-password"
                            className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-800 text-white' : ''}`}
                          >
                            Change Password
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/login"
                            className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-800 text-white' : ''}`}
                            onClick={handleLogout}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
    </div>
  )
}

export default Profile
