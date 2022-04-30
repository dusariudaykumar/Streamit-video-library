import { toast } from "react-toastify";

export const useToast = () => {
  const showToast = (msg, type) => {
    const notify = () => {
      toast[type](msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    };
    notify();
  };
  return { showToast };
};
