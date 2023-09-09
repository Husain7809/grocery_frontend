import React from 'react'

const ServicesPoster = () => {
  return (
    <div>
      <div className='container mb-20'>
        <div className='flex items-center justify-center'>
          <div className='grid lg:grid-cols-2 gap-5 py-10'>
              <div className='flex sm:max-w-2xl lg:max-w-xl'>
                <div>
                  <p className='sm:text-[34px] text-2xl font-bold'>We are at <span className='text-[#5A9C17]'>your service</span></p>
                  <p className='text-base mt-6 max-w-xl'>A came with the passion to offer ethnic, high-quality Indian and English grocery items at competitive prices, which will not only make you want to buy from us but also stay with us as a regular customer.</p>
                  <div className='flex justify-around mt-8'>
                      <div className=''><img src="/public/images/Gift_icon.svg" alt="Gift Icon" className='mx-auto'/>
                      <p className='mt-4 sm:text-sm text-xs'>10,000+  Products</p></div>
                      <div className=''><img src="/public/images/Brand_Icon.svg" alt="Brand Icon" className='mx-auto'/>
                      <p className='mt-4 sm:text-sm text-xs'>3000+ Brands</p></div>
                      <div className=''><img src="/public/images/Live_Chet_Icon.svg" alt="Gift Icon" className='mx-auto'/>
                      <p className='mt-4 sm:text-sm text-xs'>24*7 online chat support</p></div>
                  </div>
                </div>
              </div>
              <div className='flex items-end'>
                <img src="/public/images/serviceFream.svg" alt="Service Fream" className='' />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPoster
