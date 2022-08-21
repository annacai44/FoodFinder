import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

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

        // JWT...

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src='https://www.akc.org/wp-content/uploads/2021/09/Finnish-Lapphund-shutterstock_1038964219.jpg' alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                        <Button component={Link} to="/post" variant='contained' color='secondary'>Post</Button>
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    // this button redirects us to a different page where we'll show the authentication
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;




{/* <AppBar position='sticky' style={{marginBottom: '30px'}}>
<Toolbar className={classes.toolbar}>
<div className={classes.logo}>
    <FastfoodIcon className={classes.icon}/>
    <Typography variant='h4'>
        FoodFinder NU
    </Typography>
</div>
<div>
    <Button variant='contained'>Log in</Button>
</div>
</Toolbar>
</AppBar>    */}