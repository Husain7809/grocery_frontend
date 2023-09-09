import { useState } from 'react';
import { NavLink }from 'react-router-dom'
import Profile from './Profile';

const LoginButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
  
  return (
    <>
    <div>
        <button
            type="button"
            className="text-gray-500 hover:text-black focus:outline-none flex items-center"
            >
            <span className="sr-only">View My Login page with Signup</span>
            {
              isLoggedIn ? 
              <Profile/> :
              <><NavLink to={'/login'}><img src="/public/icons/User-login-icon.svg" alt="My Login Icon"/></NavLink><span className='px-1 font-bold'><NavLink to={'/login'}>Login</NavLink></span></>
            }
        </button>
    </div>
  </>
  )
}

export default LoginButton;
