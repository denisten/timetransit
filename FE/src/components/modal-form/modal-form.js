import styles from "./index.module.css";
import React from "react";
import { CallOrderForm } from "../call-order-form";

export const ModalForm = ({ closeModal }) => {
  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <CallOrderForm />
      </div>
    </div>
  );
};
