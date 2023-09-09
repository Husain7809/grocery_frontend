import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../../components/header'
import { Suspense, useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import { Loader } from '../../assets/Loader'

const Index = () => {
  const [checkLogin, setCheckLogin] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const login:any = localStorage.getItem('user')
    setCheckLogin(login)
  }, [])


  return (
    <>
    {
      checkLogin
      ?
      <div>
      <Header/>
      <Suspense fallback={<Loader/>}>
        <div className='absolute sm:top-[136px] top-32 right-0 left-0'>
        <Outlet/>
        <Footer/>
        </div>
      </Suspense>
    </div>
    :
    navigate("/login")
    } 
    </>
  )
}

export default Index
