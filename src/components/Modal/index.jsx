import AddNewProduct from '../AddNewProduct';

const Modal = ({ setModalOpen }) => {
  return (
    <div className="modal-container">
      <div className="modal-box">
        <AddNewProduct setModalOpen={setModalOpen} />
      </div>
    </div>
  );
};

export default Modal;
