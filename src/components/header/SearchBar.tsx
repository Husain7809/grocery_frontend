import { useFormik } from "formik"
import { FiSearch } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { searching } from "../../services/Auth.service"
import { useState } from "react"

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchResData, setSearchResData] = useState({})
  
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
      <>
      <div>
      {/* Search Bar */}
      <div className='hidden sm:ml-2 md:block'>
        <form action="" onSubmit={formik.handleSubmit}>
          <label className="block absolute">
            <button className="absolute inset-y-0 right-0 flex items-center pr-2 text-2xl"><FiSearch/></button>
            <input 
              className="placeholder:italic placeholder:text-slate-500 block 2xl:w-96 xl:w-80 lg:w-72 md:w-64 w-22 border-slate-300 rounded-md py-2 pl-2 pr-8 focus:outline-none sm:text-sm bg-slate-200" 
              placeholder="What are you looking for ?" 
              type="text" 
              name="search"
              onChange={formik.handleChange}
              value={formik.values.search}
            />
          </label>
        </form>
      </div>
      </div> 
      </>
  )
}

export default SearchBar
