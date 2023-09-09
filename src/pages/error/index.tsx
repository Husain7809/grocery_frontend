import { Link } from 'react-router-dom'

const index = () => {
  return (
      <div>
          <div className="flex items-center justify-center w-screen h-screen">
              <div className="text-center">
                  <h1 className="font-bold text-black text-7xl">404</h1>
                  <p className="text-2xl text-black"> <span className="text-red-600">Opps!</span> Page not found.</p>
                  <p className="text-black text-xl">
                      The page you’re looking for doesn’t exist.
                      </p>
                  <Link to={'/'}><div className='mt-4'><button className='border h-10 w-32 border-none bg-red-600 hover:bg-red-700 text-slate-100  text-sm font-bold'>Go Back To Home</button></div></Link>
              </div>
          </div>
      </div>
  )
}

export default index
