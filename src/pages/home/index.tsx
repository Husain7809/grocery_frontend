import DealsOfWeeks from "./DealsOfWeeks"
import FeaturedProducts from "./FeaturedProducts"
import FrontAdvertising from "./FrontAdvertising"
import MultipleProducts from "./MultipleProducts"
import PopularCategories from "./PopularCategories"
import SeasonOffer from "./SeasonOffer"
import ServicesPoster from "./ServicesPoster"
import SpecialOffer from "./SpecialOffer"
import TopSelling from "./TopSelling"
import WhyShopWithUs from "./WhyShopWithUs"

const index = () => {
  return (
    <>
        <FrontAdvertising/>
        <PopularCategories/>
        <SeasonOffer/>
        <TopSelling/>
        <FeaturedProducts/>
        <MultipleProducts/>
        <DealsOfWeeks/>
        <ServicesPoster/>
        <SpecialOffer/>
        <WhyShopWithUs/>
    </>
  )
}

export default index