import { useState } from "react";

const FrontAdvertising = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const backgroundImageUrl = '/public/images/pattren.svg';
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`
      };

      const handleImageClick = (index:number) => {
        setActiveIndex(index)
    }
  return (
    <div>
      <div id="default-carousel" className="relative" style={containerStyle} data-carousel="slide">
            <div className="">
                <div className="grid grid-cols-2">
                    <div className="container lg:max-w-lg sm:max-w-7xl z-30 flex items-center">
                        <div>
                            <div><p className="text-green-500 sm:font-medium font-bold text-base">Save upto 30%</p></div>
                            <div><p className="lg:text-6xl md:text-5xl text-2xl lg:font-semibold font-semibold md:font-medium py-1">Amazing Grocery deals</p></div>
                            <div className="sm:my-3 "><p className="hidden sm:block sm:text-base text-sm text-gray-600">10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!</p></div>
                            <div><button className="bg-[#5A9C17] text-white sm:p-2 p-1 sm:px-10 px-5">Shop Now</button></div>
                        </div>
                    </div>
                    {[0, 1, 2].map((index) => (
                    <div 
                    key={index}
                    className={`duration-700 ease-in-out ${activeIndex === index ? 'sm:block' : 'hidden'} `}
                    data-carousel-item={activeIndex === index ? 'active' : ''}
                    >
                        <img src={`/public/images/image${index + 1}.png`} alt="Mix Vegetable Image" className="float-right"/>
                    </div>
                    ))}
                </div>
                
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {[0, 1, 2].map((index) => (
                    <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full ${
                        activeIndex === index ? 'bg-black' : 'bg-white'
                    } border-2 border-black bg-opacity-60 hover:bg-black`}
                    aria-current={activeIndex === index ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                    data-carousel-slide-to={index}
                    onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>
      </div>
    </div>
  )
}

export default FrontAdvertising
