import { useEffect, useState } from 'react';
import Card from './Card';
import { allProducts } from '../../services/Auth.service';
import Heading from '../../components/Heading';

const TopSelling = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [categories, setCategories] = useState([])


  const getAllProducts = async () => {
    await allProducts()
    .then((res)=>{
      setCategories(res?.data.data)
    })
    .catch((error)=>{
      console.log("Get All Products =>",error);
      
    })
  }

  useEffect(()=>{
    getAllProducts()
  },[])

  return (
    <div>
      <div className="container">
        <Heading mainHeading="Top selling item" subHeading="sub item"/>
        <div className='flex justify-center'>
          <Card categories={categories} currentIndex={currentIndex}/>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;

