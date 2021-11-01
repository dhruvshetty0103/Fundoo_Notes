import React, { useState } from 'react'
import RainbowText from 'react-rainbow-text'
import { Link } from 'react-router-dom'
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
  Paper,
} from '@mui/material'
import '../css/login.scss'
const Login = () => {
  return (
    <form id="login-form" autoComplete="off">
      <Paper elevation={5} sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">
              <RainbowText lightness={0.5} saturation={1}>
                Fundoo Note
              </RainbowText>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Sign in</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p">to continue to Fundoo Notes</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">@gmail.com</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="password"
              type="password"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} align="left">
            <Button id="link-btn">Forgot password</Button>
          </Grid>
          <Grid item xs={6} align="right">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
          <Grid item xs={6} align="left">
            <Button id="link-btn" component={Link} to="/">
              Create account
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  )
}
export default Login
