import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {

    const paperStyle = { padding: 20, height: '70vh', width: 350, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const fieldStyles = {
        margin: "5px auto"
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /> </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField style={fieldStyles} label='Username' placeholder='Enter username' variant="outlined" fullWidth required />
                <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography >
                    <Link href="#">
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login