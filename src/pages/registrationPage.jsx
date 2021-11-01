import React, { useState } from 'react'
import '../css/registration.scss'
import accounts from '../assets/accounts.png'
import RainbowText from 'react-rainbow-text'
import {
  validPassword,
  validEmail,
  validFirstName,
  validLastName,
} from './formValidation'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link } from 'react-router-dom'
const theme = createTheme()

export default function SignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setPasswordConfirmError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFirstNameError(false)
    setLastNameError(false)
    setEmailError(false)
    setPasswordError(false)
    setPasswordConfirmError(false)
    if (!validFirstName.test(firstName)) setFirstNameError(true)
    if (!validLastName.test(lastName)) setLastNameError(true)
    if (!validEmail.test(email)) setEmailError(true)
    if (!validPassword.test(password)) setPasswordError(true)
    if (password !== confirmPassword) {
      setPasswordConfirmError(true)
    }
  }

  return (
    <form id="registeration-form" onSubmit={handleSubmit} autoComplete="off">
      <Paper elevation={5} sx={{ p: 2 }}>
        <ThemeProvider theme={theme}>
          <Grid container spacing={1}>
            <Grid item container xs={8} spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h3" align="left">
                  <RainbowText lightness={0.5} saturation={1}>
                    Fundoo Notes
                  </RainbowText>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h3" align="left">
                  Sign Up
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  error={firstNameError}
                  helperText={firstNameError ? 'Invalid first name' : ''}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="lastName"
                  id="lastName"
                  label="Last Name"
                  error={lastNameError}
                  helperText={lastNameError ? 'Invalid last name' : ''}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  error={emailError}
                  helperText={
                    emailError
                      ? 'Invalid email'
                      : 'You can use letters,numbers & periods'
                  }
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">@gmail.com</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  error={passwordError}
                  helperText={
                    passwordError
                      ? 'Invalid password'
                      : 'Use 8 or more characters with a mix of letters, numbers & symbols'
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={confirmPasswordError}
                  helperText={
                    confirmPasswordError ? 'Password doesnt match' : ''
                  }
                />
              </Grid>
              <Grid item xs={12} align="left">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Show password"
                  onClick={handleShowPassword}
                />
              </Grid>
              <Grid item xs={6} align="left">
                <Button id="sign-in-button" component={Link} to="/login">
                  Sign in instead
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
            <Grid item container xs={4}>
              <Grid item xs={12}>
                <img alt=" " src={accounts} width="100%" />
              </Grid>
              <Grid item xs={12}>
                <Typography component="h3" align="center">
                  One account. All of Fundoo working for you.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Paper>
    </form>
  )
}
