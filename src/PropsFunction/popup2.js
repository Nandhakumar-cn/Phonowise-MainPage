import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog2(props) {
  const {
    openModelPopup = false,

    handleModelPopupClose = () => "",
    handleModelPopupOpen = () => "",
  } = props || {};

  return (
    <div>
      <Button variant="outlined" onClick={handleModelPopupOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={openModelPopup}
        onClose={handleModelPopupClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">openModelPopup</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModelPopupClose}>Disagree</Button>
          <Button onClick={handleModelPopupClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
