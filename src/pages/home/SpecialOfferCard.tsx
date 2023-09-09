interface ICategory{
    image: string;
    offer: string;
    title: string;
    description: string
}

interface ISeasonOffer{
    categories : ICategory[];
}

const SpecialOfferCard = (props:ISeasonOffer) => {
    const { categories } = props
  return (
    <div>
    <div className="container">
      <div className="flex my-10 px-3">
        <div className="grid grid-cols-2 gap-5">
          {categories.map((item, index) => (
            <div
              className={`relative flex ${
                index === categories.length - 1 ? "col-span-2" : ""
              }`}
            >
              <img src={`${item.image}`} className="" alt={`Summer Offer`} />
              <div className="absolute sm:max-w-sm flex z-30 lg:-translate-y-40 sm:-translate-y-1/3 -translate-y-2  lg:translate-x-10 translate-x-3  bottom-0 overflow-hidden">
                <div>
                  <div className="md:mb-6 sm:mb-3">
                    <p className="text-green-500 sm:font-semibold font-medium text-base">
                      {item.title}
                    </p>
                  </div>
                  <div className="md:mb-4 sm:mb-2">
                    <p className="sm:text-[34px] text-lg font-bold ">
                      {item.offer}
                    </p>
                  </div>
                  <div className="md:mb-7 sm:mb-4 pb-1">
                    <p className="text-xs">{item.description}</p>
                  </div>
                  <div>
                    <button className="bg-[#5A9C17] text-white sm:p-2 sm:px-5 px-1 border-black">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default SpecialOfferCard
