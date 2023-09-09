import MainLogo from './MainLogo';
import Carts from './Carts';
import Profile from './Profile';
import SearchBar from './SearchBar';

const TopBar = () => {
  return (
    <div className='bg-white'>
      <div className="container"> 
        <div className='grid lg:grid-cols-4 md:grid-cols-3 py-5 pb-5'>
          {/* Main Logo With Name */}
          <a href="/"><MainLogo/></a>

          {/* Free Delivery Logo With Text */}
          <div className='hidden lg:block py-1'>
            <div className='flex space-x-1 item-center'>
              <img src="/public/icons/Truk-topNavbar.svg" alt="Free Delivery All Over India*" />
              <span className='text-sm'>Free Delivery All Over India*</span>
            </div>
          </div>

          {/* Search Bar */}
          <div>
            <SearchBar/>
          </div>
        
          {/* Login And MyCarts */}
          <div className='hidden space-x-2 md:flex justify-end sm:ml-6 sm:static sm:inset-auto sm:pr-0 me-3'>
              <div><Carts/></div>
              <div className='flex items-center'>
                {/* <LoginButton/> */}
                <Profile/>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar;