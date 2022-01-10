import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = (productData, Uploadtype) => {
  toast.configure();
  toast.success(
    Uploadtype === 'img'
      ? `Imagen ${productData.map((item) => item.id)} actualizada`
      : `Producto ${productData.map((item) => item.nombre)} actualizado`,
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

export const ToastError = () => {
  toast.configure();
  toast.error(`¡Error! No se pudo actualizar el producto`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};
