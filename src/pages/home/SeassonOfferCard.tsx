interface ICategory{
    image: string;
    offer: string;
    title: string;
}

interface ISeasonOffer{
    categories : ICategory[];
}

const SeassonOfferCard = (props:ISeasonOffer) => {
    const { categories } = props
  return (
    <div>
      <div className="container">
            <div className='flex justify-center my-20'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    {categories.map((item) => (
                        <div className='flex'>
                            <div className=" flex items-center ps-5 z-30  bottom-0 overflow-hidden w-[630px] h-[280px]" style={{ backgroundImage: `url(${item.image})`}}>
                                <div>
                                    <div><p className="text-green-500 font-semibold text-base">{item.offer}</p></div>
                                    <div className="my-1"><p className="sm:text-xl text-lg font-semibold py-1">{item.title}</p></div>
                                    <div><button className="bg-[#5A9C17] text-white sm:p-2 p-1 sm:px-5 px-2 border-black">Shop Now</button></div>
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

export default SeassonOfferCard