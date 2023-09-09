import { NavLink } from "react-router-dom";
import MainLogo from "../MainLogo";
import { useFormik } from "formik";
import { ForgotSchema } from "../../../schemas/ForgotSchema";

const ForgotPassword = () => {

  const formik = useFormik({
    initialValues: {
        email: ''
    },
    validationSchema: ForgotSchema,
    onSubmit: (values) => {
        console.log(values);
    }
})

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
            <MainLogo/>
          </div>
  
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm border p-5 shadow-lg">
            <form className="space-y-6" onSubmit={formik.handleSubmit} method="POST">
              <div>
                <h3 className="text-2xl">Forgot Password assistance</h3>
                <span className="text-sm text-gray-600">Enter the email address associated with your epic grocery account.</span>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    autoComplete="email"
                    className="bg-gray-100 border border-gray-400 text-gray-900 text-sm font-medium rounded-lg block w-full p-1.5"
                  />
                  {formik.errors.email && formik.touched.email ? <p className="text-red-500">{formik.errors.email}</p> : null}
                </div>
              </div>
              <div>
                <NavLink to={'/email-verification'}><button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Continue
                </button></NavLink>
              </div>
            </form>
          </div>
          <div className="sm:max-w-sm mx-auto my-3">
            <p className="text-lg font-medium">Has your email address changed?</p>
            <span className="text-xs">If you no longer use the e-mail address associated with your Epic Grocery account, you may contact <NavLink to={'/#'}><u className="font-bold text-indigo-600 hover:text-indigo-500">Customer Service</u></NavLink> for help restoring access to your account.</span>
          </div>
        </div>
      </>
    )
  }

export default ForgotPassword;