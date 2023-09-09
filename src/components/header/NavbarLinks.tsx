import { NavLink } from "react-router-dom"

const NavbarLinks = () => {
  return (
    <div>
        {/* Navbar Link With Clickable Pages */}
        <div className="hidden justify-center space-x-3 py-1 sm:block">
            <NavLink to="/" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">Home</NavLink>
            <NavLink to="/new-products" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">New Products</NavLink>
            <NavLink to="/shop" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">Shop</NavLink>
            <NavLink to="/offers" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">Offers</NavLink>
            <NavLink to="/store-location" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">Store Location</NavLink>
        </div>
    </div>
  )
}

export default NavbarLinks
