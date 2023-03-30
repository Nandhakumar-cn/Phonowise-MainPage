

import { styled } from "@mui/material/styles";
import { Avatar, Button, Typography, Grid, Box, AppBar } from "@mui/material";



export const StyledHeaderTypography = styled(Typography)`
color: black;
fontWeight: bolder;
margin: auto;
font-size: 26px;
font-weight: bolder;
font-family: 'Montserrat';
padding: 10px;
text-align: center;


`;


export const StyledSecondTypography = styled(Typography)`
color: black;
fontWeight: bolder;
margin: 20px;
text-align: center;
font-size: 25px;
font-weight: bolder;
font-family: 'Montserrat';


`;
export const Styledh6 = styled("h6")`
margin: 100px 0 0;
color: darkgray;
text-align: center;
position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;

`
export const StyledButton = styled(Button)`
border: none;
font-weight: 600;
background-color: transparent;
padding-left: 32px;
text-transform: capitalize !important;
font-size: 18px;
cursor: pointer;
font-family: 'Montserrat' !important;
color:black;
position: absolute;
left: 60px;
top:-2px;
padding:10px;

`
export const StyledGrid = styled(Grid)`
svg#Group_11026 {
    position: absolute;
    right: 42px;
    top: 9px;
}
`
export const StyledDiv = styled("div")`
width: 10px;
position: absolute;
top: 10px;
img{
    height: 20px;
    position: absolute;
    left: 3px;
    top: 2px;
}
`
export const Styledimgborder = styled("div")`
margin: 0 auto;
display: table;
padding:3px;
border: 3px dashed hsl(195deg 6% 87%);
border-radius: 80px;
z-index: -2;
margin-top:30px;
`
export const Styledavatar = styled(Avatar)`
height:100px;
width:100px;`

export const MainDivContainer = styled(Grid)`
height:100vh;
width:100%;
`
export const StyledBoxContainer = styled(Box)`
flexGrow: 1;
`
export const StyledAppBar = styled(AppBar)`
background-color:white;
color:black;
`
export const StyledHeaderh6 = styled("h6")`
margin: 0;
color: darkgray;
text-align: center;
font-weight:400;
font-size: 16px;
`
export const StyledTypographyLeft = styled(Typography)`
  font-family: "Manrope", sans-serif;
  font-size: 20px;
  color: #000;
  margin: 0px;
  width: 100%;
  text-align: center;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: left;
  text-transform: capitalize;
`;