import React from 'react'
import MainContent from '../Content/Content';
// import * as StyledDOM from "../My-Account/style"
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Toolbar from '@mui/material/Toolbar';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';//NEED SVG image
import Header from '../My-Account/Header';
import Backdropprops from '../PropsFunction/backdropprops';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// import { Link } from 'react-router-dom'
// import { BrowserRouter, Routes, Route} from "react-router-dom";
function Editprofile() {
  const headerprops ={
title:"Edit Profile",
showBackIcon:true,
floatLeft:false,
BookmarkIcon:true


  }
  const maincontentprops={
    content:true,
  }

  // const backward = () =>{
  //  window.history.back();
  // } 
  return (
    <>
{/*  
 <StyledDOM.StyledBoxContainer >
            <StyledDOM.StyledAppBar position="static" >
              <Toolbar variant="dense">
                <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
                  <ArrowBackIosNewIcon onClick={backward}/>
                </IconButton>
                <StyledDOM.StyledHeaderTypography variant='h5'>Edit profile</StyledDOM.StyledHeaderTypography>
              </Toolbar>
            </StyledDOM.StyledAppBar>
          </StyledDOM.StyledBoxContainer> */}
          <Header {...headerprops}/>
          <MainContent  {...maincontentprops}/>
          <PhoneInput
  inputProps={{
    name: 'phone',
    required: true,
    autoFocus: true
  }}
  country={"india"}
  excludeCountries={["us","cu","cw"]}
  // onlyCountries={["us","cu","cw"]}
  autoFormat={true}
  disableCountryCode={false}
  enableAreaCodes={false}
  enableTerritories={false}
  enableLongNumbers={false}
  enableSearch={true}
  countryCodeEditable={true}
/>
          <Backdropprops/>
    </>
  )
}

export default Editprofile