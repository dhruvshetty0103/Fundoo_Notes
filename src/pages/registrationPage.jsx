import * as React from 'react'
import '../css/style.css'
import accounts from '../assets/accounts.png'
import RainbowText from 'react-rainbow-text'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Link from '@mui/material/Link'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
const theme = createTheme()

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
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
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  helperText={
                    'Use 8 or more characters with a mix of letters, numbers & symbols'
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} align="left">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Show password"
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
