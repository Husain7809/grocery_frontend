import * as Yup from 'yup';


export const RegisterSchemas = Yup.object({
    first_name : Yup.string().min(2).max(20).required("Please enter the first name"),
    last_name : Yup.string().min(2).max(20).required("Please enter the last name"),
    phone : Yup.string().min(10).max(10).required("Please enter the phone number"),
    email: Yup.string().email().required('Please enter the email'),
    password: Yup
    .string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required("Please enter the password"),
    confirm_password : Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords does not match')
    .required('Password is mendatory'),
    profile_img : Yup.mixed().required('File is required')
})
