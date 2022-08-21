import React from "react";
import { useSelector } from 'react-redux';
import Post from './Post/Post.js';
import useStyles from './styles';
import { Grid, CircularProgress } from '@material-ui/core';

const Posts = ({ setCurrentId }) => {
    // fetch data from global redux store
    // it's called posts bc in reducers/index.js, we have posts reducer
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12}>
                        {/* sending the post and setCurrentId into the Post component as props */}
                        {/* props drilling: sending the same prop over and over again to the most child component */}
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;