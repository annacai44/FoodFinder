import React, { useEffect, useState } from 'react';
import { Grow, Grid, Container } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch getPosts action, which ensures that for every change, we're going to get new post(s)
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Grow in>
            <Container >
                <Grid container justifyContent='space-between' alignitems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;

// className={classes.mainContainer} -> goes into Grid container