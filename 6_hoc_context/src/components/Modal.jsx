const Modal = ({ close, children }) => {
  // eğerki bir component'e farklı bir component 'i prop olarak gönderirsek bu prop olarak gönderilen component children olarak propu ile erişilebilir
  return (
    <div className="modal d-block bg-black bg-opacity-50">
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              onClick={close}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body text-dark">{children}</div>
          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-secondary">
              Kapat
            </button>
            <button onClick={close} type="button" className="btn btn-primary">
              Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
