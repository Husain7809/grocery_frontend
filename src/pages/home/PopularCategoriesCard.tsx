

interface ICategory{
    name: string;
    image_url: string;
    active: boolean;
}

interface IPopularCard{
    categories: ICategory[];
    currentIndex:number;
}


const PopularCategoriesCard = (props:IPopularCard) => {
    const {categories, currentIndex} = props       
    
    
  return (
    <div>
        <div className="grid xl:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-5 mb-10">
            {
            categories[0] ?
                categories.map((category, index) => (
                    <>
                    <div
                        key={index}
                        className={`${
                        index === currentIndex
                            ? 'border-gray-400 shadow-md'
                            : 'border-gray-300 hover:shadow-gray-400 hover:shadow-md'
                        } border-2 p-4 rounded-xl flex items-center justify-around cursor-pointer relative w-[190px] h-[122px]`}
                        >
                        <div>
                            {category.active && (
                            <div className="absolute top-0 right-0 mt-2 mr-2">
                                <div className="bg-gray-100 text-green-600 absolute top-0 right-0 mt-2 mr-2 font-medium rounded-full p-1 px-2 text-xs">New</div>
                            </div>
                            )}
                            <div className="flex justify-around">
                            <img
                                src={category.image_url}
                                alt={category.name}
                                className="w-[40px] h-[37.52px]"
                                />
                            </div>
                            <div>
                            <span className="text-sm font-medium">{category.name}</span>
                            </div>
                        </div>
                    </div>
                    </>
                ))
            :
            <div className="flex items-center justify-center col-span-6">
                <h1 className="text-gray-400 text-2xl font-light">Popular Categories Not Found</h1>
            </div>
        }
        </div>
    </div>
  )
}

export default PopularCategoriesCard
