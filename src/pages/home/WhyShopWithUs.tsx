import React from 'react'

const WhyShopWithUs = () => {

    const categories = [
        { title: 'Free Delivery', image: '/public/icons/FreeDelivery.svg',description:'When you spend over £60!' },
        { title: 'Shipping Info', image: '/public/icons/ShopingInfo.svg',description:'Fast Service*' },
        { title: 'Loyalty Scheme', image: '/public/icons/LoyaltyScheme.svg',description:'Earn Points With an Account' },
        { title: 'Contact Us', image: '/public/icons/ContactUs.svg',description:'Here to Help'}
      ];

  return (
    <div>
      <div className='container mb-10'>
        <div>
            <h2 className="text-center font-bold text-2xl my-10">
                Why Shop With Us?
            </h2>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-5'>
                {categories.map((item)=> (
                    <div className='flex gap-3 items-center justify-center'>
                        <div><img src={item.image} alt={item.title}/></div>
                        <div>
                            <p className='text-xl font-bold'>{item.title}</p>
                            <p className='text-sm'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyShopWithUs
