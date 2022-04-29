import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { forwardRef, useImperativeHandle } from "react";
import { Checkout } from "./Checkout";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, IconButton } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  height: "95vh",
  padding: "5px",
  width: "80vw",
};
export const CheckoutModal = forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);

  useImperativeHandle(ref, () => ({
    handleOpen() {
      setOpen(true);
    },
  }));
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Checkout />
        </Box>
      </Modal>
    </div>
  );
});
