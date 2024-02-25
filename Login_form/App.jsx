import React, { useState } from "react"
import { Stack, TextField } from "@mui/material";
import SvgIcon from '@mui/material/SvgIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from "@mui/material/Input";
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from "@mui/material/FormControlLabel";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
function HomeIcon(props) {
  return (
    <SvgIcon {...props} fontSize="large">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"></path>
    </SvgIcon>
  );
}

export default function Login() {
  const [isChecked , setChecked] = useState(true);
  const [user , setUser] = useState({
    email:"" ,
    password: "" ,
    remember: isChecked
  }); 

  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleChange = (event) => {
    const {name , value} = event.target;
    setUser( prevState => {
      return {
        ...prevState , [name] : value
      };
    });
  }
  const inputFieldStyles = {
    my :2,
    width : '50ch',  
    '& input' : {
      height:'4ch',
      backgroundColor: 'transparent',
      fontSize:'2ch'

    },
    '& label' : {
      fontSize : '19px'
    }
   
  };
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
        <form onSubmit={(e) => e.preventDefault() }>
          <Stack>

            <TextField 
              id="standard-basic" 
              label="Email address*" 
              variant="standard"
              sx={inputFieldStyles}
              autoFocus = {user.email == "" ? true : false}
              onChange={handleChange}
              name="email"
              value={user.email}
            />

            <FormControl sx={inputFieldStyles} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                onChange={handleChange}
                name="password"
                value={user.password}
              />
            </FormControl>

            <FormControlLabel 
            control={<Checkbox defaultChecked onChange={(e) =>{
              setChecked( prevState => !prevState);
            } }/>} label="Remember Me" 
            
            />

            <Button 
              variant="contained"
              sx={{
                mt:3,
                height:'5.5ch'
              }}
              type="submit"
            >Sign In</Button>
          </Stack>
        </form>
      <Box
      sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width : '50ch',
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
