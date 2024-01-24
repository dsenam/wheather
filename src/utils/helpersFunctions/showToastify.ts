import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

enum ToastTypes {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  DEFAULT = 'default',
}

type ToastFunction = {
  [key in ToastTypes]: (message: string, options?: Record<string, any>) => void;
};

const showToast: ToastFunction = {
  [ToastTypes.INFO]: (message, options) => toast.info(message, options),
  [ToastTypes.SUCCESS]: (message, options) => toast.success(message, options),
  [ToastTypes.WARNING]: (message, options) => toast.warning(message, options),
  [ToastTypes.ERROR]: (message, options) => toast.error(message, options),
  [ToastTypes.DEFAULT]: (message, options) => toast(message, options),
};

export default showToast;