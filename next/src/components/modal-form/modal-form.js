import styles from "./index.module.css";
import React from "react";
import dynamic from "next/dynamic";
// import { CallOrderForm } from "../call-order-form";
const CallOrderForm = dynamic(() => import('@/components/call-order-form'), {
    ssr: false,
})
console.log("CallOrderForm", CallOrderForm);
export const ModalForm = ({ closeModal }) => {
  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <CallOrderForm />
      </div>
    </div>
  );
};
