import { AxiosPost } from '../../utils/ApiRequests';

export function HandleInputChanges(e, setFormValues, formValues) {
  setFormValues({
    ...formValues,
    [e.target.name]: e.target.value,
  });
}

export function handleCheckBoxChange(e, setFormValues, formValues) {
  const statusValue = e.target.checked == true ? 1 : 0;
  setFormValues({
    ...formValues,
    [e.target.name]: statusValue,
  });
}

export function handleAddProduct(
  e,
  formValues,
  setButtonLoading,
  setSentForm,
  setFetcherror,
  uploadPicture
) {
  e.preventDefault();
  setButtonLoading(true);

  AxiosPost({
    formValues,
    setButtonLoading,
    setSentForm,
    setFetcherror,
    uploadPicture,
  });
}

export function handleCancelButton(setModalOpen) {
  setModalOpen(false);
}

export const SelectFile = (e, setuploadPicture) => {
  setuploadPicture(e.target.files[0]);
};

export const onBlurEvent = (e, isInputEmpty, setisInputEmpty, inputEl) => {
  if (!e.target.value) {
    setisInputEmpty(true);
    inputEl.current.className = 'inputError';
  } else {
    setisInputEmpty(false);
  }
};
