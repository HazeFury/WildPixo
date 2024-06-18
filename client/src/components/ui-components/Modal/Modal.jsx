import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Modal.module.css";

function Modal({ openBtnText, yesBtnText, noBtnText, descriptionText }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section>
      <button
        type="button"
        className="nes-btn is-primary"
        onClick={handleOpenModal}
      >
        {openBtnText}
      </button>
      {showModal === true && (
        <div
          className={`nes-dialog is-rounded ${styles.modal_container}`}
          id="dialog-rounded"
        >
          <form method="dialog">
            <p className="title">{descriptionText}</p>
            <div className={styles.btn_container}>
              <button
                type="button"
                className="nes-btn"
                onClick={handleOpenModal}
              >
                {noBtnText}
              </button>
              <button type="button" className="nes-btn is-red ">
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
  yesBtnText: PropTypes.string.isRequired,
  noBtnText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
};

export default Modal;
