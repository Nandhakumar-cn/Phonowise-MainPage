import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';//NEED SVG image
import Stack from '@mui/material/Stack';
import placeholder from "../component/icons/personplaceholder.png"
import * as StyledDOM from "./style.jsx";
import edit from "../component/icons/profile.png"
import referral from "../component/icons/referral.png"
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom"


export default function MyAccount() {
  const navigate = useNavigate()
const json=
  {
      "name":"Nandhakumar.Sri",
      "job":"Product Designer",
      "field1":"Edit Profile",
      "field2":"FAQs",
      "field3":"Referral",
      "field4":"Settings",
      "field5":"Logout",
      "Product":"Privacy Policy | T&C ",
      "Heading":"My Account",
  }

  return (
    <>

      <StyledDOM.MainDivContainer container>
        <Grid item xs={12} lg={12} sm={12}>
          <StyledDOM.StyledBoxContainer >
            <StyledDOM.StyledAppBar position="static" >
              <Toolbar variant="dense">
                <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
                  <ArrowBackIosNewIcon />
                </IconButton>
                <StyledDOM.StyledHeaderTypography variant='h5'>{json.Heading}</StyledDOM.StyledHeaderTypography>
              </Toolbar>
            </StyledDOM.StyledAppBar>
          </StyledDOM.StyledBoxContainer>
          <Stack direction="row" spacing={2}>
            <StyledDOM.Styledimgborder>
              <StyledDOM.Styledavatar alt="Remy Sharp" src={placeholder}></StyledDOM.Styledavatar>
            </StyledDOM.Styledimgborder>
          </Stack>
          <StyledDOM.StyledSecondTypography>{json.name}<StyledDOM.StyledHeaderh6>{json.job}</StyledDOM.StyledHeaderh6></StyledDOM.StyledSecondTypography>
          <StyledDOM.StyledBoxContainer  >

            <StyledDOM.StyledAppBar position="static" >
              <Toolbar variant="dense">

                <Typography variant="h5">
                  <StyledDOM.StyledDiv>
                    <img src={edit} alt="sorry" className='editlogo' ></img>
                  </StyledDOM.StyledDiv>
                  <StyledDOM.StyledButton onClick={() => { navigate("/Editprofile") }}>{json.field1}</StyledDOM.StyledButton>
                  <StyledDOM.StyledGrid>
                    <svg id="Group_11026" data-name="Group 11026" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"  >
                      <rect id="Rectangle_5364" data-name="Rectangle 5364" width="28" height="28" fill="none" margin-left="1290px" />
                      <path id="Path_417" data-name="Path 417" d="M104.851,7.693l-6.034,6.02a.982.982,0,1,1-1.39-1.386L102.766,7,97.426,1.673A.982.982,0,0,1,98.816.287l6.034,6.02a.979.979,0,0,1,0,1.386Z" transform="translate(-87.138 7)" fill="#575757" />
                    </svg>
                  </StyledDOM.StyledGrid>
                </Typography>
              </Toolbar>
            </StyledDOM.StyledAppBar >
          </StyledDOM.StyledBoxContainer >


          <StyledDOM.StyledBoxContainer  >
            <StyledDOM.StyledAppBar position="static" >
              <Toolbar variant="dense">
                <Typography variant="h5">
                  <StyledDOM.StyledDiv>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                      <g id="Group_11507" data-name="Group 11507" transform="translate(-16 -424)">
                        <rect id="Rectangle_5429" data-name="Rectangle 5429" width="28" height="28" rx="2" transform="translate(16 424)" fill="#ffd016" opacity="0.1" />
                        <g id="Icon_feather-help-circle" data-name="Icon feather-help-circle" transform="translate(18 426)">
                          <path id="Path_107463" data-name="Path 107463" d="M21,12a9,9,0,1,1-9-9,9,9,0,0,1,9,9Z" fill="none" stroke="#ffd016" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                          <path id="Path_107464" data-name="Path 107464" d="M13.635,12.31a2.719,2.719,0,0,1,5.284.906c0,1.813-2.719,2.719-2.719,2.719" transform="translate(-4.273 -3.011)" fill="none" stroke="#ffd016" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                          <path id="Path_107465" data-name="Path 107465" d="M18,25.5h0" transform="translate(-6 -9)" fill="none" stroke="#ffd016" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                      </g>
                    </svg>
                  </StyledDOM.StyledDiv>
                  <StyledDOM.StyledButton onClick={() => { navigate("/Faq") }}>{json.field2}</StyledDOM.StyledButton>
                  <StyledDOM.StyledGrid>
                    <svg id="Group_11026" data-name="Group 11026" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"  >
                      <rect id="Rectangle_5364" data-name="Rectangle 5364" width="28" height="28" fill="none" margin-left="1290px" />
                      <path id="Path_417" data-name="Path 417" d="M104.851,7.693l-6.034,6.02a.982.982,0,1,1-1.39-1.386L102.766,7,97.426,1.673A.982.982,0,0,1,98.816.287l6.034,6.02a.979.979,0,0,1,0,1.386Z" transform="translate(-87.138 7)" fill="#575757" />
                    </svg>
                  </StyledDOM.StyledGrid>
                </Typography>
              </Toolbar>
            </StyledDOM.StyledAppBar>
          </StyledDOM.StyledBoxContainer>
          <StyledDOM.StyledBoxContainer >

            <StyledDOM.StyledAppBar position="static" >
              <Toolbar variant="dense">

                <Typography variant="h5">
                  <StyledDOM.StyledDiv>
                    <img src={referral} alt="sorry" className='editlogo'  ></img>
                  </StyledDOM.StyledDiv>
                  <StyledDOM.StyledButton onClick={() => { navigate("/Referral") }}>{json.field3}</StyledDOM.StyledButton>
                  <StyledDOM.StyledGrid>
                    <svg id="Group_11026" data-name="Group 11026" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"  >
                      <rect id="Rectangle_5364" data-name="Rectangle 5364" width="28" height="28" fill="none" margin-left="1290px" />
                      <path id="Path_417" data-name="Path 417" d="M104.851,7.693l-6.034,6.02a.982.982,0,1,1-1.39-1.386L102.766,7,97.426,1.673A.982.982,0,0,1,98.816.287l6.034,6.02a.979.979,0,0,1,0,1.386Z" transform="translate(-87.138 7)" fill="#575757" />
                    </svg>
                  </StyledDOM.StyledGrid>
                </Typography>

              </Toolbar>
            </StyledDOM.StyledAppBar  >
          </StyledDOM.StyledBoxContainer >

          <StyledDOM.StyledBoxContainer  >

            <StyledDOM.StyledAppBar position="static" >
              <Toolbar variant="dense">

                <Typography variant="h5">
                  <StyledDOM.StyledDiv>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                      <g id="Group_11508" data-name="Group 11508" transform="translate(-16 -560)">
                        <rect id="Rectangle_5434" data-name="Rectangle 5434" width="28" height="28" rx="2" transform="translate(16 560)" fill="#05100f" opacity="0.1" />
                        <g id="Icon_feather-settings" data-name="Icon feather-settings" transform="translate(19.5 563.5)">
                          <path id="Path_107466" data-name="Path 107466" d="M18.409,15.955A2.455,2.455,0,1,1,15.955,13.5,2.455,2.455,0,0,1,18.409,15.955Z" transform="translate(-5.455 -5.455)" fill="none" stroke="#575757" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                          <path id="Path_107467" data-name="Path 107467" d="M16.555,12.955a1.35,1.35,0,0,0,.27,1.489l.049.049a1.637,1.637,0,1,1-2.315,2.315l-.049-.049a1.361,1.361,0,0,0-2.307.965v.139a1.636,1.636,0,0,1-3.273,0V17.79a1.35,1.35,0,0,0-.884-1.235,1.35,1.35,0,0,0-1.489.27l-.049.049a1.637,1.637,0,1,1-2.315-2.315l.049-.049A1.361,1.361,0,0,0,3.275,12.2H3.136a1.636,1.636,0,1,1,0-3.273H3.21a1.35,1.35,0,0,0,1.235-.884,1.35,1.35,0,0,0-.27-1.489l-.049-.049A1.637,1.637,0,1,1,6.442,4.192l.049.049a1.35,1.35,0,0,0,1.489.27h.065a1.35,1.35,0,0,0,.818-1.235V3.136a1.636,1.636,0,0,1,3.273,0V3.21a1.361,1.361,0,0,0,2.307.965l.049-.049a1.637,1.637,0,1,1,2.315,2.315l-.049.049a1.35,1.35,0,0,0-.27,1.489v.065a1.35,1.35,0,0,0,1.235.818h.139a1.636,1.636,0,0,1,0,3.273H17.79a1.35,1.35,0,0,0-1.235.818Z" fill="none" stroke="#575757" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                      </g>

                    </svg>
                  </StyledDOM.StyledDiv>
                  <StyledDOM.StyledButton onClick={() => { navigate("/Settings") }} >{json.field4}</StyledDOM.StyledButton>
                  <StyledDOM.StyledGrid>
                    <svg id="Group_11026" data-name="Group 11026" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"  >
                      <rect id="Rectangle_5364" data-name="Rectangle 5364" width="28" height="28" fill="none" margin-left="1290px" />
                      <path id="Path_417" data-name="Path 417" d="M104.851,7.693l-6.034,6.02a.982.982,0,1,1-1.39-1.386L102.766,7,97.426,1.673A.982.982,0,0,1,98.816.287l6.034,6.02a.979.979,0,0,1,0,1.386Z" transform="translate(-87.138 7)" fill="#575757" />
                    </svg>
                  </StyledDOM.StyledGrid>
                </Typography>
              </Toolbar>
            </StyledDOM.StyledAppBar>
          </StyledDOM.StyledBoxContainer>
          <StyledDOM.StyledBoxContainer  >
            <StyledDOM.StyledAppBar position="static" >
              <Toolbar variant="dense">
                <Typography variant="h5">
                  <StyledDOM.StyledDiv>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                      <g id="Group_11509" data-name="Group 11509" transform="translate(-16 -628)">
                        <rect id="Rectangle_5436" data-name="Rectangle 5436" width="28" height="28" rx="2" transform="translate(16 628)" fill="#ff5c3e" opacity="0.1" />
                        <g id="Icon_feather-log-out" data-name="Icon feather-log-out" transform="translate(17.5 629.5)">
                          <path id="Path_107468" data-name="Path 107468" d="M9.728,20.5H6.243A1.76,1.76,0,0,1,4.5,18.722V6.278A1.76,1.76,0,0,1,6.243,4.5H9.728" fill="none" stroke="#ff5c3e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                          <path id="Path_107469" data-name="Path 107469" d="M24,19.53l4.357-4.515L24,10.5" transform="translate(-7.857 -2.515)" fill="none" stroke="#ff5c3e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                          <path id="Path_107470" data-name="Path 107470" d="M23.956,18H13.5" transform="translate(-3.456 -5.5)" fill="none" stroke="#ff5c3e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                      </g>
                    </svg>
                  </StyledDOM.StyledDiv>
                  <StyledDOM.StyledButton onClick={() => { navigate("/Logout") }}>{json.field5}</StyledDOM.StyledButton>
                  <StyledDOM.StyledGrid>
                    <svg id="Group_11026" data-name="Group 11026" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"  >
                      <rect id="Rectangle_5364" data-name="Rectangle 5364" width="28" height="28" fill="none" margin-left="1290px" />
                      <path id="Path_417" data-name="Path 417" d="M104.851,7.693l-6.034,6.02a.982.982,0,1,1-1.39-1.386L102.766,7,97.426,1.673A.982.982,0,0,1,98.816.287l6.034,6.02a.979.979,0,0,1,0,1.386Z" transform="translate(-87.138 7)" fill="#575757" />
                    </svg>
                  </StyledDOM.StyledGrid>
                </Typography>
              </Toolbar>
            </StyledDOM.StyledAppBar>
          </StyledDOM.StyledBoxContainer>
          <StyledDOM.Styledh6>{json.Product}</StyledDOM.Styledh6>
        </Grid>
      </StyledDOM.MainDivContainer>


    </>


  );
}
