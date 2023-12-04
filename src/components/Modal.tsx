import { Modal as ModalMUI } from "@mui/material";

interface IProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

function Modal({ handleClose, open, children }: IProps) {
  return (
    <ModalMUI
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div
        className={`absolute left-1/2 top-1/2 bg-white -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-onBkg font-IRANSansX text-typography shadow-md`}
      >
        {children}
      </div>
    </ModalMUI>
  );
}

export default Modal;
