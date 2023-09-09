import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom"
const ChangePassword = React.lazy(()=> import('../components/header/Authentication/ChangePassword'))
const ForgotPassword = React.lazy(()=> import('../components/header/Authentication/ForgotPassword'))
const Login = React.lazy(() => import('../components/header/Authentication/Login'))
const Register = React.lazy(() => import('../components/header/Authentication/Register'))
const ResetPassword = React.lazy(() => import("../components/header/Authentication/ResetPassword"))
const Home = React.lazy(() => import("../pages/home"))
const NewProducts = React.lazy(() => import("../pages/newProducts"))
const Offers = React.lazy(() => import("../pages/offers"))
const Shop = React.lazy(() => import("../pages/shop"))
const StoreLocation = React.lazy(() => import("../pages/storeLocation"))
const OtpVerification = React.lazy(() => import("../components/header/Authentication/OtpVerification"))
const Private = React.lazy(() => import("../routes/private/index"))
const Public = React.lazy(() => import("../routes/public/index"))
const Search = React.lazy(() => import("../pages/search"))
const Error = React.lazy(() => import("../pages/error"))
const ProductDetails = React.lazy(() => import("../pages/productDetails"))
const MyCarts = React.lazy(() => import("../pages/myCart/MyCartsPage"))
// const MyCarts = React.lazy(() => import("../pages/myCart/MyCarts"))
const CheckOut = React.lazy(()=> import("../pages/checkOut"))
const Payment = React.lazy(()=> import("../pages/checkOut/Payment"))
const Addresses = React.lazy(()=> import("../components/header/ManageAddress"))

const index = () => { 

    return (
      <div>
        {/* <Suspense fallback={<Loader/>}> */}
          <Routes>
            <Route path="/" element={<Private/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/search/:product?" element={<Search/>}/>
              <Route path="/new-products" element={<NewProducts/>}/>
              <Route path="/offers" element={<Offers/>}/>
              <Route path="/shop/:id?" element={<Shop/>}/>
              <Route path="/store-location" element={<StoreLocation/>}/>
              <Route path="/product-details" element={<ProductDetails/>}/>
              <Route path="/my-carts" element={<MyCarts/>}/>
              <Route path="/change-password" element={<ChangePassword/>}/>
              <Route path="/checkout" element={<CheckOut/>}/>
              <Route path="/payment" element={<Payment/>}/>
              <Route path="/manage-addresses" element={<Addresses/>}/>
            </Route>
            <Route path="/" element={<Public/>}>
              <Route path="/login" element={<Login/>}/>
              <Route path="/create" element={<Register/>}/>
              <Route path="/forgot-password" element={<ForgotPassword/>}/>
              <Route path="/email-verification" element={<OtpVerification/>}/>
              <Route path="/reset-password" element={<ResetPassword/>}/>
            </Route>
            <Route path='*' element={<Error/>} />
          </Routes>
        {/* </Suspense> */}
      </div>
    )
  }
  
  export default index