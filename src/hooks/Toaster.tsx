import { toast } from "react-toastify";

const Toaster = {
    success : (message : any) => {
        toast.success(message)
    },
    error : (message : any) => {
        toast.error(message)
    },
    info : (message : any) => {
        toast.info(message)
    },
    warning : (message : any) => {
        toast.warning(message)
    },

}

export default Toaster;