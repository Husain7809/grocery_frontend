import { useFormik } from "formik";
import MainLogo from "../MainLogo"
import { ResetPasswordSchema } from "../../../schemas/ResetPasswordSchema";
import { NavLink } from "react-router-dom";

const ResetPassword = () => {
    const formik = useFormik({
        initialValues: {
            new_password: '',
            password_again: ''
        },
        validationSchema: ResetPasswordSchema,
        onSubmit: (values) => {
          console.log(values);
        },
      });
  return (
    <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
                <MainLogo/>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm border p-5 shadow-xl">
                <form className="space-y-6" onSubmit={formik.handleSubmit} method="POST">
                    <div className="text-left">
                        <h3 className="text-2xl font-medium">Create new password</h3>
                        <span className="text-xs text-gray-600">We'll ask for this password whenever you sign in.</span>
                    </div>
                    <div>
                        {/* New Password */} 
                        <div className="mb-5">
                            <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">New Password</label>
                            <input 
                            type="password" 
                            id="new_password" 
                            name='new_password'
                            onChange={formik.handleChange}
                            value={formik.values.new_password}
                            className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-1.5 text-lg"/>
                            {formik.errors.new_password && formik.touched.new_password ? <p className="text-red-500">{formik.errors.new_password}</p> : null}

                        </div>
                        {/* Password Again */}
                        <div className="mb-5">
                            <label htmlFor="password_again" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password again</label>
                            <input 
                            type="password" 
                            id="password_again" 
                            name='password_again'
                            onChange={formik.handleChange}
                            value={formik.values.password_again} 
                            className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-1.5 text-lg"/>
                            {formik.errors.password_again && formik.touched.password_again ? <p className="text-red-500">{formik.errors.password_again}</p> : null}

                        </div> 
                    </div>
                    {/* Save Chages and Sign in Button */}
                    <div>
                        <NavLink to={'/login'}>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Save changes and sign in
                            </button>
                        </NavLink>
                    </div>
                </form>
            </div>
            <div className="sm:max-w-sm mx-auto mt-3 text-left">
                <p className="text-lg">Secure password tips:</p>
                <div className="flex"><p className="pr-2"> ‣ </p><p className="text-sm">Use at least 8 characters, a combination of numbers and letters is best.</p></div>
                <div className="flex"><p className="pr-2"> ‣ </p><p className="text-sm">Do not use the same password you have used with us previously.</p></div>
                <div className="flex"><p className="pr-2"> ‣ </p><p className="text-sm">Do not use dictionary words, your name, e-mail address, mobile phone number or other personal information that can be easily obtained.</p></div>
                <div className="flex"><p className="pr-2"> ‣ </p><p className="text-sm">Do not use the same password for multiple online accounts.</p></div>
                
                    
            </div>
        </div>
    </div>
  )
}

export default ResetPassword
