import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Modal.module.css";

function Modal({
  openBtnText,
  openBtnColor,
  yesBtnText,
  noBtnText,
  descriptionText,
  action,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAction = (e) => {
    e.preventDefault();
    action();
    handleCloseModal();
  };

  return (
    <section>
      <button
        type="button"
        className={`nes-btn is-${openBtnColor}`}
        onClick={handleOpenModal}
      >
        {openBtnText}
      </button>
      {showModal === true && (
        <div
          className={`nes-dialog is-rounded ${styles.modal_container}`}
          id="dialog-rounded"
        >
          <form onSubmit={handleAction}>
            <p className={styles.title}>{descriptionText}</p>
            <div className={styles.btn_container}>
              <button
                type="button"
                className="nes-btn"
                onClick={handleCloseModal}
              >
                {noBtnText}
              </button>
              <button type="submit" className="nes-btn is-red ">
                {yesBtnText}
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

Modal.propTypes = {
  openBtnText: PropTypes.string.isRequired,
  openBtnColor: PropTypes.string.isRequired, // can be the folowing words : violet, blue, yellow, red, green, orange;
  yesBtnText: PropTypes.string.isRequired,
  noBtnText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Modal;
