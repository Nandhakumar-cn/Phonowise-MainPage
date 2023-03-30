import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import logoutgif from "../PropsFunction/0110.json"

export default function AlertDialog1(props) {

  const {
    openBackdrop = false,

    handleBackdropOpen = () => "",
    handleBackdropClose = () => "",
  } = props || {};
  console.log(props);
 
  return (
    <div>
      <Button variant="outlined" onClick={handleBackdropOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={openBackdrop}
        onClose={handleBackdropClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Player
  autoplay
  loop
  // src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
  src={logoutgif}

  style={{ height: '200px', width: '200px' }}
>
  <Controls visible={false} />
</Player>
        <DialogTitle id="alert-dialog-title">openBackDrop</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBackdropClose}>Disagree</Button>
          <Button onClick={handleBackdropClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
