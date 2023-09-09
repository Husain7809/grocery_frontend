import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RegisterSchemas } from '../../schemas';
import { register } from '../../services/Auth.service';
import Collapse from './Collapse';

const ManageAddress = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            profile_img: null,
            first_name: '',
            last_name: '',
            phone: '',
            email:'',
            password:'',
            confirm_password: ''
        },
        validationSchema : RegisterSchemas,
        onSubmit : (values) => {
          const {first_name, last_name, email, phone, password} = values;
          const userVal={
            first_name,
            last_name,
            email,
            phone,
            password
          }
    
          console.log(userVal);
          
       
          register(userVal)
          .then((res) => {
            console.log("Res => ",res);
            navigate('/login')
          })
          .catch((err) => {
            // console.log('err => ',);
            toast.error(err.response.data.message)
          })
    
        }
    })
    
  return (
    <div>
      Hello
      <Collapse title="+ Add Address">
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-md">
                <form className="space-y-2" method="POST" onSubmit={formik.handleSubmit}>
                    <div className="relative flex justify-center mb-5">
                        <label htmlFor="profile_img">

                        {
                            formik.values.profile_img ? ( <img src={URL.createObjectURL(formik.values.profile_img)} alt='profile' className='w-20 h-20 rounded-full cursor-pointer'/> ) : <img src="/public/icons/Main-logo.svg" alt="" className='w-20 h-20 rounded-full border-4 p-1 cursor-pointer' /> 
                        }
                        </label>
                        <input
                        id="profile_img"
                        type="file"
                        name='profile_img'
                        accept="image/*"
                        className="inset-0 w-0 h-0 opacity-0 cursor-pointer"
                        onChange={(e : any)=>{
                            formik.setFieldValue('profile_img', e.currentTarget.files[0]);
                        }}
                        />
                        {formik.errors.profile_img && formik.touched.profile_img ? <p className="text-red-500 flex items-center">{formik.errors.profile_img}</p> : null}
                    </div>
                    <div className="grid gap-6 mb-5 md:grid-cols-2">
                    {/* First Name */}
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First name</label>
                            <input 
                            type="text" 
                            id="first_name" 
                            name='first_name'
                            autoComplete='first_name'
                            onChange={formik.handleChange}
                            value={formik.values.first_name}
                            className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-1.5 text-lg"/>
                            {formik.errors.first_name && formik.touched.first_name ? <p className="text-red-500">{formik.errors.first_name}</p> : null}

                        </div>
                    {/* Last Name */}
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last name</label>
                            <input 
                            type="text" 
                            id="last_name" 
                            name='last_name'
                            autoComplete='last_name'
                            onChange={formik.handleChange}
                            value={formik.values.last_name}
                            className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-1.5 text-lg"/>
                            {formik.errors.last_name && formik.touched.last_name ? <p className="text-red-500">{formik.errors.last_name}</p> : null}
                        </div> 
                    </div>
                    {/* Phone Number */}
                    <div className='mb-5'>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone number</label>
                        <input 
                        type="tel"
                        id="phone"
                        name='phone'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-1.5 text-lg"/>
                        {formik.errors.phone && formik.touched.phone ? <p className="text-red-500">{formik.errors.phone}</p> : null}
                    </div>
                    {/* Email */}
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email address</label>
                        <input 
                        type="email" 
                        id="email" 
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-1.5 text-lg"/>
                        {formik.errors.email && formik.touched.email ? <p className="text-red-500">{formik.errors.email}</p> : null}
                    </div>
                    {/* Password */} 
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-1.5 text-lg"/>
                        {formik.errors.password && formik.touched.password ? <p className="text-red-500">{formik.errors.password}</p> : null}

                    </div>
                    {/* Confirm Password */}
                    <div className="mb-5">
                        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm password</label>
                        <input 
                        type="password" 
                        id="confirm_password" 
                        name='confirm_password'
                        onChange={formik.handleChange}
                        value={formik.values.confirm_password} 
                        className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-1.5 text-lg"/>
                        {formik.errors.confirm_password && formik.touched.confirm_password ? <p className="text-red-500">{formik.errors.confirm_password}</p> : null}

                    </div> 
                    <div style={{marginTop:'20px'}}>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                            Register
                        </button>
                    </div>
                </form>
                <p className="my-3 text-center text-sm text-gray-500">
                Already have an account?{' '}
                <NavLink to={'/login'}>
                <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login ‣</span></NavLink>
                </p>
            </div>
        </div>
      </Collapse>
      <Collapse title="Button with data-te-target">
        Some other content for the second collapse component.
      </Collapse>
    </div>
  );
};

export default ManageAddress;
