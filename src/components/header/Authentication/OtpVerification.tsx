import MainLogo from "../MainLogo"
import { useFormik } from "formik";
import { OtpVerificationSchema } from "../../../schemas/OtpVerificationSchema";
import { NavLink } from "react-router-dom";

const OtpVerification = () => {

    const formik = useFormik({
        initialValues: {
          otp1: '',
          otp2: '',
          otp3: '',
          otp4: '',
        },
        validationSchema: OtpVerificationSchema,
        onSubmit: (values) => {
          console.log(values);
        },
      });
    
  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
            <MainLogo/>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm border p-5 shadow-xl">
                <form className="space-y-6" onSubmit={formik.handleSubmit} method="POST">
                    <div>
                        <h3 className="text-2xl font-medium">Verification required</h3>
                        <span className="text-sm text-gray-600">To continue, complete this verification step. We've sent an OTP to the email <b> parthivmali8460@gmail.com </b>. Please enter it below to complete verification.</span>
                    </div>
                    <div className="mb-5 flex justify-center">
                        <div className="px-2">
                            <label htmlFor="otp1" className="sr-only">
                                OTP 1
                            </label>
                            <input
                                type="text"
                                id="otp1"
                                name="otp1"
                                onChange={formik.handleChange}
                                value={formik.values.otp1}
                                maxLength={1}
                                className="bg-gray-50 border border-gray-400 text-gray-900 text-xl rounded-lg block w-10 p-2.5"
                            />
                            {formik.touched.otp1 && formik.errors.otp1 ? (<p className="text-red-500">{formik.errors.otp1}</p>) : null}
                        </div>
                        <div className="px-2">
                            <label htmlFor="otp2" className="sr-only">
                                OTP 2
                            </label>
                            <input
                                type="text"
                                id="otp2"
                                name="otp2"
                                onChange={formik.handleChange}
                                value={formik.values.otp2}
                                maxLength={1}
                                className="bg-gray-50 border border-gray-400 text-gray-900 text-xl rounded-lg block w-10 p-2.5"
                            />
                            {formik.touched.otp2 && formik.errors.otp2 ? (<p className="text-red-500">{formik.errors.otp2}</p>) : null}
                        </div>
                        <div className="px-2">
                            <label htmlFor="otp3" className="sr-only">
                                OTP 3
                            </label>
                            <input
                                type="text"
                                id="otp3"
                                name="otp3"
                                onChange={formik.handleChange}
                                value={formik.values.otp3}
                                maxLength={1}
                                className="bg-gray-50 border border-gray-400 text-gray-900 text-xl rounded-lg block w-10 p-2.5"
                            />
                            {formik.touched.otp3 && formik.errors.otp3 ? (<p className="text-red-500">{formik.errors.otp3}</p>): null}
                        </div>
                        <div className="px-2">
                        <label htmlFor="otp4" className="sr-only">
                            OTP 4
                        </label>
                        <input
                            type="text"
                            id="otp4"
                            name="otp4"
                            onChange={formik.handleChange}
                            value={formik.values.otp4}
                            maxLength={1}
                            className="bg-gray-50 border border-gray-400 text-gray-900 text-xl rounded-lg block w-10 p-2.5"
                        />
                        {formik.touched.otp4 && formik.errors.otp4 ? (<p className="text-red-500">{formik.errors.otp4}</p>) : null}
                        </div>
                    </div>
                    <div className="">
                        <NavLink to={'/reset-password'}>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Continue
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <p className="font-bold text-indigo-600 hover:text-indigo-500 text-center cursor-pointer">Resend OTP</p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default OtpVerification
