import React from "react";
import { useSelector } from 'react-redux';
import Post from './Post/Post.js';
import useStyles from './styles';
import { Typography, Grid, CircularProgress } from '@material-ui/core';

const Posts = ({ setCurrentId }) => {
    // fetch data from global redux store
    const {isLoading, posts} = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    
    if (!posts.length && !isLoading) return (
        <Typography align='center' variant='h2'>No leftover food available at this time. Check back later!</Typography>
    );

    return (
        !posts.length ? <CircularProgress /> : (
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    {posts?.map((post) => (
                        <Grid key={post._id} item xs={12}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))}
                </Grid> 
            )
    )
}

export default Posts;