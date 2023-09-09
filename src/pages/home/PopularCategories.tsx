import { useEffect, useState } from 'react';
import PopularCategoriesCard from './PopularCategoriesCard';
import { allCategories } from '../../services/Auth.service';

const PopularCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [categories, setCategories] = useState([])
    
  const getCategories = async () => {
    await allCategories()
    .then((res : any ) => {
      const resData = res?.data.data;
      const filterData = resData.filter((e : any) => {
        return e.is_active  === true;
      })

      setCategories(filterData)
      // console.log('filterData => ', filterData);
      

    })
    .catch((error) => {
      console.log(error); 
    })
  }


  useEffect(() => {
    getCategories()
  },[])

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex: number) =>  (prevIndex > 0 ? prevIndex - 1 : 0))
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex: number)=> (prevIndex < categories.length - 1  ? prevIndex + 1 : categories.length - 1))
  }


  return (
    <div>
      <div className="container">
        <div className='relative'>
          <h2 className="text-center font-bold text-2xl my-10">
            Popular Categories
          </h2>
            <div className='absolute flex right-0 top-0'>
              <button type="button" className=" z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePreviousClick}>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50 dark:group-hover:bg-gray-300/60 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 hover:text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                      <span className="sr-only">Previous</span>
                  </span>
              </button>
              <button type="button" className="z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNextClick}>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-300/60 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 hover:text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                      <span className="sr-only">Next</span>
                  </span>
              </button>
            </div>
        </div>
        <div className='flex justify-center'>
          <PopularCategoriesCard categories={categories} currentIndex={currentIndex}/>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
