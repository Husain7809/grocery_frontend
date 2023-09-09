import { useLocation } from 'react-router-dom';
import Card from '../home/Card';
import { useState } from 'react';


const SearchPage = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const location = useLocation();
    const { data, value } = location.state; 
      console.log("Value =>",value.search);
      

  return (
    <>
      <div className='my-10'>
        <div className='my-10 flex justify-center'>
          <p className='text-2xl font-bold'> Search results for “ {value.search} ”</p>
        </div>
        <div className='flex justify-center'>
          <Card categories={data} currentIndex={currentIndex}/>
        </div>
        <div className='text-center my-5'>
          <button className='border h-10 w-32 border-white bg-[#5A9C17] text-slate-100 text-sm font-bold'>Load More</button>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
