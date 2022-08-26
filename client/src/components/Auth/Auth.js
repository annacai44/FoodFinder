import React, { useState }from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    // we get access to a full response
    const googleSuccess = async (res) => {
        // ?. ensures that an error will not be thrown if we don't have a res object; it will just say res is undefined
        const result = jwt_decode(res?.credential);
        const token = res?.credential;

        console.log(result);

        // if our login is successful, we want to dispatch something
        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            // history belongs to react-router-dom
            history.push('/');
        } catch (err) {
            console.log(err);
        }
    }

    const googleFailure = (err) => {
        console.log(err);
        console.log("Google Sign In was unsuccessful. Try again later.")
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h6' align='center'>
                    Must sign in with Northwestern&nbsp;email.
                </Typography>
                    <GoogleLogin 
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                        hosted_domain="u.northwestern.edu"
                    />
            </Paper>
        </Container>
    )
}

export default Auth;