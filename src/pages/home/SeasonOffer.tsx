import { Suspense } from "react";
import SeassonOfferCard from "./SeassonOfferCard";

const SeasonOffer = () => {
    const categories = [
        {image: '/public/images/SummerFruits.svg' ,offer: 'Summer Offer 20% Off' ,title: 'Fresh Fruits Big Sale'},
        {image: '/public/images/SummerVegetable.svg' ,offer: 'Fresh Farm Products 40% Off' ,title: 'Vegetable Big Sale'}
      ];
  return (
    <Suspense>
    <div>
        <SeassonOfferCard categories={categories}/>
    </div>
    </Suspense>
  )
}

export default SeasonOffer
