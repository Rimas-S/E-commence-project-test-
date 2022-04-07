import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  widthMax: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};
const ConfirmDialog = ({ evokeFunction, open, setOpen, value }: any) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    evokeFunction(value);
    setOpen(false);
  };

  return (
    <div className="modal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "red" }}
          >
            Delete product
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, mb: 2, fontSize: 15 }}
          >
            Permanently delete product Id: {value}? You can't undo this.
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{ margin: 1 }}
              startIcon={<CancelIcon />}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleConfirm}
              sx={{ margin: 1 }}
              startIcon={<CheckIcon />}
            >
              Confirm
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmDialog;
