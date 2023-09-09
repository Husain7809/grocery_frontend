import * as Yup from 'yup';

export const ChangePasswordSchema = Yup.object({
    oldPassword: Yup.string().required("Please enter the password"),
    newPassword: Yup
    .string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required("Please enter the password"),
    confirmPassword : Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords does not match')
    .required('Password is mendatory'),
})
