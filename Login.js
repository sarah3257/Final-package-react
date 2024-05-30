import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate}from 'react-router-dom';
import {login,getAllUsers} from './features/users/usrsSlice';
import  { useEffect } from 'react'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
       {'Sarah Rom © '}
      <Link color="inherit" href="https://github.com/sarah3257">
          my web
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function SignIn() {
  let nav=useNavigate();
  const dis=useDispatch();
  const arrUsers=useSelector(s => s.user.arrUsers);
  useEffect(() => {
 
    const fetchAllUsers = async () => {
        await dis(getAllUsers())
    }
    fetchAllUsers()
}, [dis]) ;
console.log(arrUsers)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const currentUser={ 
      "name": data.get('lastName'),
      "password":  data.get('password'),
      };
      const userExists = arrUsers.find(user => {
        return user.name === currentUser.name && user.password === currentUser.password;
      });
     
    //  const userExists = arrUsers.some(user => user.name == currentUser.name && user.password == currentUser.password);
      if (userExists) {
    dis(login(currentUser));
    nav('/Products');
  }
    else{
      nav('/signUp');
    }

   
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
               
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}