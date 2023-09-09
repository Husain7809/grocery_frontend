import { useFormik } from "formik";
import { ChangePasswordSchema } from "../../../schemas/ChangePasswordSchema";
import { changePassword } from "../../../services/Auth.service";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        },
        validationSchema: ChangePasswordSchema,
        onSubmit: (values) => {
            const {oldPassword,newPassword} = values
            const userData = {
                password:oldPassword,
                new_password:newPassword
            }
            changePassword(userData)
            .then(() => {
              localStorage.removeItem('user');
              navigate('/login') 
            })
        }
    })
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-widest text-indigo-600">
              Change Password
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" method="POST" onSubmit={formik.handleSubmit}>
              <div>
                {/* Old Password */}
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Old Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="oldPassword"
                    name="oldPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.oldPassword}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  />
                  {formik.errors.oldPassword && formik.touched.oldPassword ? <p className="text-red-500">{formik.errors.oldPassword}</p> : null}
                </div>
                {/* New Password */}
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    New Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.newPassword}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  />
                  {formik.errors.newPassword && formik.touched.newPassword ? <p className="text-red-500">{formik.errors.newPassword}</p> : null}
                </div>
                {/* Confirm Password */}
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  />
                  {formik.errors.confirmPassword && formik.touched.confirmPassword ? <p className="text-red-500">{formik.errors.confirmPassword}</p> : null}
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update Password
                </button>
              </div>
            </form>
  
            <div className="flex justify-center mt-3">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                </a>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default ChangePassword;
  