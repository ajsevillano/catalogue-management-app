import AxiosPost from '../../utils/ApiRequests';

export function HandleInputChanges(e, setFormValues, formValues) {
  setFormValues({
    ...formValues,
    [e.target.name]: e.target.value,
  });
}

export function handleCheckBoxChange(e, setFormValues, formValues) {
  const statusValue = e.target.checked ? 1 : 0;
  setFormValues({
    ...formValues,
    [e.target.name]: statusValue,
  });
}

export function handleAddProduct(
  e,
  formValues,
  buttonLoading,
  setButtonLoading,
  setSentForm,
  setFetcherror,
  uploadPicture
) {
  e.preventDefault();
  setButtonLoading(true);

  formValues['name'] && formValues['brand'] && formValues['size']
    ? AxiosPost({
        formValues,
        setButtonLoading,
        setSentForm,
        setFetcherror,
        uploadPicture,
      })
    : window.alert('Aun faltan datos por rellenar');
}

export function handleCancelButton(setModalOpen) {
  setModalOpen(false);
}

export const SelectFile = (e, setuploadPicture) => {
  setuploadPicture(e.target.files[0]);
};

export const onBlurEvent = (e, isInputEmpty, setisInputEmpty) => {
  if (!e.target.value) {
    e.target.className = 'inputError';
    setisInputEmpty({
      ...isInputEmpty,
      [e.target.name]: true,
    });
  } else {
    e.target.className = 'inputOk';
    setisInputEmpty({
      ...isInputEmpty,
      [e.target.name]: false,
    });
  }
};
