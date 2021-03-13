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
  setFetcherror
) {
  e.preventDefault();
  setButtonLoading(true);
  AxiosPost({ formValues, setButtonLoading, setSentForm, setFetcherror });
}

export function handleCancelButton(setModalOpen) {
  setModalOpen(false);
}
