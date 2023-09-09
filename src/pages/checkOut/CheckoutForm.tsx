import { useFormik } from 'formik';
import { CheckoutSchema } from '../../schemas/CheckoutSchema';
import { Link } from 'react-router-dom';

const CheckoutForm = () => {

    const userString = localStorage.getItem("user")
    const user = userString ? JSON.parse(userString) : null

    
  const formik = useFormik({
    initialValues: {
        full_name: '',
        email:'',
        address: '',
        city: '',
        country:'',
        state: '',
        zipcode: '' 

    },
    validationSchema : CheckoutSchema,
    onSubmit : (values) => {
      console.log(values);
    }
})

  return (
    <>
<div className=" p-6 bg-gray-100 flex items-center justify-center">
  <div className="container sm:max-w-xl mx-auto">
    <div>
      <div className="bg-white rounded shadow-lg shadow-gray-400 p-4 px-4 md:p-8 mb-32">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1">
          <div className="text-gray-600">
            <p className="font-medium text-lg my-2">Personal Details</p>
          </div>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5">
                  <label htmlFor="full_name">Full Name</label>
                  <input 
                    disabled
                    type="text" 
                    name="full_name" 
                    id="full_name" 
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-500" 
                    value={user.data.first_name +" "+ user.data.last_name}
                  />
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    disabled
                    type="text"
                    name="email"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-500" 
                    value={user.data.email} 
                  />
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="phone">Phone number</label>
                  <input 
                  disabled
                    type="tel"
                    id="phone"
                    name='phone'
                    value={user.data.phone}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-500"/>
                </div>

                <div className="md:col-span-3">
                  <label htmlFor="address">Address / Street</label>
                  <input 
                    type="text" 
                    name="address" 
                    id="address" 
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                    value={formik.values.address}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.address && formik.touched.address ? <p className="text-red-500">{formik.errors.address}</p> : null}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="city">City</label>
                  <input 
                    type="text" 
                    name="city" 
                    id="city" 
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                    value={formik.values.city} 
                    onChange={formik.handleChange}
                  />
                  {formik.errors.city && formik.touched.city ? <p className="text-red-500">{formik.errors.city}</p> : null}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="state">State / province</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input 
                      name="state" 
                      id="state" 
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" 
                      value={formik.values.state}
                      onChange={formik.handleChange}
                    />
                  </div>
                    {formik.errors.state && formik.touched.state ? <p className="text-red-500">{formik.errors.state}</p> : null}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="country">Country / region</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input 
                      name="country" 
                      id="country" 
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" 
                      value={formik.values.country}
                      onChange={formik.handleChange}
                    />
                  </div>
                    {formik.errors.country && formik.touched.country ? <p className="text-red-500">{formik.errors.country}</p> : null}
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="zipcode">Zipcode</label>
                  <input 
                    type="text"
                    name="zipcode" 
                    id="zipcode" 
                    className="transition-all flex items-center h-10 border mt-1 rounded px-1 w-full bg-gray-50" 
                    value={formik.values.zipcode} 
                    onChange={formik.handleChange}
                  />
                  {formik.errors.zipcode && formik.touched.zipcode ? <p className="text-red-500">{formik.errors.zipcode}</p> : null}
                </div>
        
                <div className="md:col-span-5 text-right">
                  <div className="text-center my-2">
                    <Link to="/payment">
                       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
                    </Link>
                  </div>  
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div> 
    </>
  )
}

export default CheckoutForm