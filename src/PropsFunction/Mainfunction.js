import React from "react";


function MainFunction() {
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const [openModelPopup, setOpenModelPopup] = React.useState(false);

  const handleBackdropClose = () => {
    setOpenBackdrop(false);
  };
  const handleBackdropOpen = () => {
    setOpenBackdrop(true);
    console.log(openBackdrop);
  };

  const handleModelPopupClose = () => {
    setOpenModelPopup(false);
  };
  const handleModelPopupOpen = () => {
    setOpenModelPopup(true);
  };
  return {
    openBackdrop,
    setOpenBackdrop,
    handleBackdropOpen,
    handleBackdropClose,
    openModelPopup,
    setOpenModelPopup,
    handleModelPopupClose,
    handleModelPopupOpen,
  };
}
export { MainFunction };
export default MainFunction;
