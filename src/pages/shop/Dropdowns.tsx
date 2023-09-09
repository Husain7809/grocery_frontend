import { Menu } from "@headlessui/react"
import { useEffect, useState } from "react"
import { allCategories } from "../../services/Auth.service"


interface IcategoriesName{
    name: string;
    id: number;
}

const Dropdowns = ({categoryId} : any) => {
    const [categoriesName, setCategoriesName] = useState([])

    const getCategories = async () => {
        await allCategories()
        .then((res : any ) => {
          const resData = res?.data.data;
          const filterData = resData.filter((e : any) => {
            return e.is_active  === true;
          })
    
        setCategoriesName(filterData)
        })
        .catch((error) => {
          console.log(error); 
        })
      }

      useEffect(() => {
        getCategories()
      },[])
      
      const handleCategoryClickedId =(id:any) => {
        categoryId(id)
        
      }

  return (
    <>
        {/* All Categories Toggle Dropdown List */}
        <div className="shadow-lg border border-gray-100 border-t-2">
            <div className="my-4 p-2">
                <p className="text-xl font-semibold">Categories</p>
            </div>
                {categoriesName.map((item: IcategoriesName, index : number)=>{
                    return(
                        <Menu as="div" className="relative text-left" key={`Popular Categories${index}`} onClick={() => handleCategoryClickedId(item.id)}>
                            <div className="flex items-center text-gray-600 hover:bg-gray-800 hover:text-slate-50 gap-x-2 border border-gray-100">
                                <p className="text-md p-2 font-medium tracking-wider">{item.name}</p>
                            </div>
                        </Menu>
                    )
                })}
        </div>
    </>
  )
}

export default Dropdowns
