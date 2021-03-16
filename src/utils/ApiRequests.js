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
        const fileExtension = uploadPicture.name.split('.').pop();
        const lastId = response.data.lastID;
        setButtonLoading(false);
        const formData = new FormData();
        formData.append('file', uploadPicture, `${lastId}.${fileExtension}`);
        axios
          .post('http://api.uniondistribuidora.com/img', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(
            (response) => {
              console.log(response);
            },
            (error) => {
              console.log(error);
            }
          );
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
