import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

// makes react apps multi-page
import { Link, useHistory, useLocation } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();


    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <>
        <AppBar className={classes.appBar} color='inherit'>
            <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">FoodFinder</Typography>
                <FastfoodIcon className={classes.icon}/>
            </div>
            {user ? (
                <div className={classes.buttonGroup}>
                    <Button className={classes.postButton} component={Link} to="/post" variant='contained'>Post</Button>
                    <Button variant='contained' className={classes.button} onClick={logout}>Logout</Button>
                </div>
            ) : (
                // this button redirects us to a different page where we'll show the authentication
                <Button className={classes.button} component={Link} to="/auth" variant="contained">Sign In</Button>
            )}
            </Toolbar>
        </AppBar>
        <Toolbar style={{minHeight: '24px'}}/>
        </>
    )
}

export default Navbar;
