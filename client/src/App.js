import React, { useEffect, useState } from "react";
import { Container } from '@material-ui/core';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Form from "./components/Form/Form";
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        // ensures that for every change, we're going to get new post(s)
        dispatch(getPosts());
    }, [dispatch]);

    return (
    <GoogleOAuthProvider clientId='459151855029-k0f07ac9ad193qhq61db5e5ro63qc3bh.apps.googleusercontent.com'>
        <BrowserRouter>
                <Navbar />
                <Container maxwidth="lg">
                    <Switch>
                        <Route path="/FoodFinder" exact>
                            <Home setCurrentId={setCurrentId}/>
                        </Route>
                        <Route path="/FoodFinder/auth" exact>
                            <Auth />
                        </Route>
                        <Route path="/FoodFinder/post" exact>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Route>
                    </Switch>
                </Container>
                {/* <footer className={classes.footer}>
                    <Typography variant='h6' align='center'>
                        Yuh get sum free food don't waste
                    </Typography>
                </footer> */}
        </BrowserRouter>
    </GoogleOAuthProvider>
    )
};

export default App;