import { Menu } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { allCategories } from "../../services/Auth.service"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  interface IcategoriesName{
    name: string;
    id: number;
}

const AllCategories = () => {
    const [categoriesName, setCategoriesName] = useState([])
    const navigate = useNavigate()
    const getCategories = async() => {
        await allCategories()
        .then((res)=>{
            const resData = res?.data.data
            const filterData = resData.filter((e:any)=>{
                return e.is_active === true
            })
            setCategoriesName(filterData)
        })
    }

    useEffect(()=>{
        getCategories()
    },[])

    const handleCategoryClickedId =(id:any) => {
        // alert(id)
        navigate('/shop')
        
      }
  return (
    <>
        {/* All Categories Toggle Dropdown List */}
        <div className="hidden sm:block ps-3 z-50">
            <Menu as="div" className="relative text-left">
                    <Menu.Button className="flex items-center  text-white gap-x-2 text-md font-semibold">All Categories  
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-white " aria-hidden="true" />
                    </Menu.Button>
                <Menu.Items className="absolute right-30 z-10 mt-2 w-56 origin-top-right rounded bg-white shadow-xl focus:outline-none">
                    {categoriesName.map((item:IcategoriesName,index:number)=>(
                        <div key={`AllCategories${index}`}>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to={`/shop/${item.id}`}
                                        onClick={() => handleCategoryClickedId(item.id)}
                                        className={classNames(
                                            active ? 'bg-gray-800 text-white' : 'text-black',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    ))}
                </Menu.Items>
            </Menu>
        </div>
    </>
  )
}

export default AllCategories
