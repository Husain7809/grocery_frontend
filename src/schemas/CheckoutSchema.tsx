import * as Yup from 'yup';


export const CheckoutSchema = Yup.object({
    full_name : Yup.string().min(5).max(30).required("Please enter the full name"),
    email: Yup.string().email().required('Please enter the email'),
    address: Yup.string().required("please enter the address"),
    city: Yup.string().required("please enter the city"),
    state: Yup.string().required("please enter the state"),
    country: Yup.string().required("please enter the country"),
    zipcode: Yup.string().required("Enter zipcode")
})
