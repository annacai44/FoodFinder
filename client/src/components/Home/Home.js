import React from 'react';
import { Grow, Container } from '@material-ui/core';
import Posts from '../Posts/Posts';

const Home = ({ setCurrentId }) => {

    return (
        <Grow in>
            <Container maxWidth="sm">
                <Posts setCurrentId={setCurrentId}/>
            </Container>
        </Grow>
    )
}

export default Home;