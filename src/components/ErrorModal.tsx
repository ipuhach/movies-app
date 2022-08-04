import { Backdrop, Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import css from "../styles/ErrorModal.module.css";

const ErrorModal: React.FC<{ errorMessage: string }> = (props) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        hideBackdrop={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Backdrop
            open={open}
            className={css.backdrop}
            onClick={handleClose}
          />
          <Box className={css.modal}>
            <Typography className={css.header} variant="h6" component="h2">
              Whoopsie. Got an error.
            </Typography>
            <Typography className={css.desc}>{props.errorMessage}</Typography>
          </Box>
        </>
      </Modal>
    </>
  );
};

export default ErrorModal;
