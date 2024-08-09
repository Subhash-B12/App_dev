// src/components/Login/Login.js
import React from 'react';
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
import { useNavigate } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    // Fetch user data from JSON server
    fetch(`http://localhost:5001/users?email=${email}`)
      .then(response => response.json())
      .then(users => {
        if (users.length > 0) {
          const user = users[0]; // Assuming email is unique
          if (user.password === password) {
            setOpen(true);
            // Redirect based on email domain
            if (email.endsWith('@gmail.com')) {
              setTimeout(() => navigate('/'), 2000); // Redirect to Home
            } else if (email.endsWith('@admin.com')) {
              setTimeout(() => navigate('/admin-dashboard'), 2000); // Redirect to Admin Dashboard
            } else {
              setError('User role not recognized');
            }
          } else {
            setError('Invalid email or password');
          }
        } else {
          setError('Invalid email or password');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('An error occurred. Please try again.');
      });
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
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
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => navigate('/signup')}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        {/* Snackbar for success message */}
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
          <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
            Login successful! Redirecting...
          </Alert>
        </Snackbar>
        {/* Snackbar for error message */}
        {error && (
          <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={() => setError('')}>
            <Alert onClose={() => setError('')} severity="error" sx={{ width: '100%' }}>
              {error}
            </Alert>
          </Snackbar>
        )}
      </Container>
    </ThemeProvider>
  );
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
