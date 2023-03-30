/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import * as StyledDOM from "../My-Account/style";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"; //NEED SVG image
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const Header = (props) => {
  const { title= "", showBackIcon = false, floatLeft=true,BookmarkIcon=false} = props || {};

//   const backToPreviousPage = (backTo) => {
//     backTo ? navigateTo(backTo) : navigateTo(-1);
//   };

const backToPreviousPage = () =>{
    window.history.back();
}
  return (
    <div>
      <StyledDOM.StyledBoxContainer>
        <StyledDOM.StyledAppBar position="static">
          <Toolbar variant="dense">
            {showBackIcon ? (
              <IconButton
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={()=>backToPreviousPage()}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            ) : null}
            
               {floatLeft ? (
            <StyledDOM.StyledTypographyLeft variant="h4">
              {title}
            </StyledDOM.StyledTypographyLeft>
          ) : (
           <StyledDOM.StyledHeaderTypography variant="h5">
              {title}
            </StyledDOM.StyledHeaderTypography> 
          )}
          {
            BookmarkIcon ?
           <span><BookmarksIcon/> </span> :null
          }
          
          </Toolbar>
        </StyledDOM.StyledAppBar>
      </StyledDOM.StyledBoxContainer>
    
    </div>
  );
};

export default Header;
