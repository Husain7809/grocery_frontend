const MultipleProducts = () => {

  const categories = [
      { title: 'Your Daily Staples', image: '/public/images/DailyStample.svg', description: 'Authentic Masalas for the Authentic Taste', price: '$0.48', color: '#E1E7FF'},
      { title: "Desserts & Sweets", image: '/public/images/Sweets.svg', description: "Authentic Masalas for the Authentic Taste", price: '$0.89', color: '#DAF3DA' },
      { title: 'Dairy Prodcts', image: '/public/images/DairyProduct.svg', description: 'Authentic Masalas for the Authentic Taste', price: '$2.56', color: '#FFF3D6'}
  ];

  return (
    <div>
      <div className="container flex justify-center">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 mb-20">
            {categories.map((category) => (
              <div className="border flex justify-around rounded-md sm:w-[410px] sm:h-[368px] sm:p-0 p-5" style={{ backgroundColor: category.color }}>
                <div>
                  <div className="flex justify-center">
                  <img
                      src={category.image}
                      alt={category.title}
                      className="w-40 h-40"
                  />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <div className='flex justify-center mt-4'>
                          <span className="text-xl font-medium text-black">{category.title}</span>
                      </div>
                      <div className='flex justify-center mt-4'>
                          <span className="text-base font-medium">{category.description}</span>
                      </div>
                      <div className='flex justify-center mt-5'><button className='border border-black p-2 px-10 hover:bg-[#000000] hover:text-slate-100 hover:border-none bg-white text-sm font-bold'>Shop Now</button></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MultipleProducts;

