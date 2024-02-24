import React from "react"
import { Stack, TextField } from "@mui/material";
import SvgIcon from '@mui/material/SvgIcon';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from '@mui/material/Box';

function HomeIcon(props) {
  return (
    <SvgIcon {...props} fontSize="large">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"></path>
    </SvgIcon>
  );
}

export default function Login() {


  return(
    <main className="container" >
      <Box 
        sx={{
          display:'flex',
          flexDirection : 'column',
          alignItems : 'center',
        }}
      >
        <HomeIcon color="primary" />
        <p className="sign-in">Sign In</p>
      </Box>
      <Stack>
      <TextField 
        id="outlined-basic" 
        label="Email address*" 
        variant="outlined"
        sx={{
          my :2,
          width : '55ch',  
          '& input' : {
            height:'3ch'
          },
          '& label' : {
            fontSize : '19px'
          }
        }}

        autoFocus
      />
      <TextField 
        id="outlined-basic" 
        label="Password*" 
        variant="outlined"
        sx={{
          my:2,
          width : '55ch',  
          '& input' : {
            height:'3ch'
          },
          '& label' : {
            fontSize : '19px'
          }
        }}
      />
      <FormControlLabel 
      control={<Checkbox defaultChecked />} label="Remember Me" 
      defaultChecked
      />
      <Button 
        variant="contained"
        sx={{
          mt:3,
          height:'5.5ch'
        }}
      >Sign In</Button>
      </Stack>
      <Box
      sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width : '55ch',
          mt: 2, 
          mx : 2 
        }}
      >
        <Link href="#">Forgot password?</Link>
        <Link href="#">Don't have an account? Sign Up</Link>
      </Box>
    </main>
  );
}
