import SpecialOfferCard from "./SpecialOfferCard";

const SpecialOffer = () => {
    const categories = [
        {image: '/public/images/SpicyFoods.svg' ,offer: 'Save 35% OFF' ,title: 'Spicy Foods', description:'Available at best prices'},
        {image: '/public/images/NaturalBeauty.svg' ,offer: 'Save 25% OFF' ,title: 'Natural Beauty', description:'Available at best prices'},
        {image: '/public/images/BlackFridaysOffer.svg' ,offer: 'Save 50% OFF' ,title: 'Black Fridays! offer', description:'Available at best prices'}
      ];
  return (
    <div>
        <SpecialOfferCard categories={categories}/>
    </div>
  )
}

export default SpecialOffer
