import { useState, useEffect, Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Loader } from '../../assets/Loader';

const Index = () => {
  const [checkLogin, setCheckLogin] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const login:any = localStorage.getItem('user')
    setCheckLogin(login)
  }, [])

  return (
      <Suspense fallback={<Loader/>}>
    <>
    {
      checkLogin ?
        navigate("/")
      :
        <Outlet/>
      }
    </>
      </Suspense>
  )
}

export default Index
