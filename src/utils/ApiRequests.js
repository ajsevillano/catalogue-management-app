import axios from 'axios';

export function AxiosPost({
  formValues,
  setButtonLoading,
  setSentForm,
  setFetcherror,
  uploadPicture,
}) {
  const headers = { 'Content-Type': 'text/plain' };
  axios
    .post(
      'https://dev.ajsevillano.com/products',
      {
        tipo: formValues.type,
        marca: formValues.brand,
        tamano: formValues.size,
        nombre: formValues.name,
        activo: formValues.activo,
      },
      { headers }
    )
    .then(
      (response) => {
        console.log(uploadPicture);
        setButtonLoading(false);
        setSentForm(true);
        console.log(response);
      },
      (error) => {
        setSentForm(true);
        setFetcherror(true);
        console.log(error);
      }
    );
}
