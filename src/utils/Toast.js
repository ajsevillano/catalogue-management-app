import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = (productData) => {
  //Toastify conf and notification
  toast.configure();
  toast.success(
    `Producto ${productData.map((item) => item.nombre)} actualizado`,
    {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    }
  );
};

export default Toast;
