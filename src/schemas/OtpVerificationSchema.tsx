import * as Yup from 'yup';

export const OtpVerificationSchema = Yup.object().shape({
    otp1: Yup.string()
      .required('OTP is required')
      .matches(/^\d$/, 'OTP 1 must be a single digit'),
    otp2: Yup.string()
      .required('OTP is required')
      .matches(/^\d$/, 'OTP 2 must be a single digit'),
    otp3: Yup.string()
      .required('OTP is required')
      .matches(/^\d$/, ' OTP3 must be a single digit'),
    otp4: Yup.string()
      .required('OTP is required')
      .matches(/^\d$/, 'OTP 4 must be a single digit'),
  });