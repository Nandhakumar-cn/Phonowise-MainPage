import React from 'react'
import {MainFunction } from './Mainfunction';

import AlertDialog1 from './popup1';
import AlertDialog2 from './popup2';

function Backdropprops() {
    const {
        openBackdrop,
        setOpenBackdrop,
        handleBackdropOpen,
        handleBackdropClose,
        openModelPopup,
        setOpenModelPopup,
        handleModelPopupClose,
        handleModelPopupOpen
    }=MainFunction();
    console.log(openBackdrop)
    const a1props = {
        openBackdrop,
        setOpenBackdrop,
        handleBackdropOpen,
        handleBackdropClose
    }
    const a2props = {
        openModelPopup,
        setOpenModelPopup,
        handleModelPopupClose,
        handleModelPopupOpen
    }
  return (
    <div>
        <AlertDialog1 {...a1props}/>
        <AlertDialog2 {...a2props}/>
    </div>
  )
}

export default Backdropprops