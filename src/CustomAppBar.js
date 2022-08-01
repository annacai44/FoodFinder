import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import useStyles from './styles';
import { FastfoodSharp } from '@material-ui/icons';

const CustomAppBar = () => {
    const classes=useStyles();
    return (
        <AppBar position='sticky'>
            <Toolbar className={classes.toolbar}>
                <div className={classes.logo}>
                    <FastfoodSharp className={classes.icon}/>
                    <Typography variant='h4'>
                        FoodFinder NU
                    </Typography>
                </div>
                <div>
                    <Button variant='contained'>Log in</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
};

export default CustomAppBar;