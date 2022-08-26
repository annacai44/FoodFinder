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
require('dotenv').config();

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        // ensures that for every change, we're going to get new post(s)
        dispatch(getPosts());
    }, [dispatch]);

    return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
                <Navbar />
                <Container maxwidth="lg">
                    <Switch>
                        <Route path="/" exact>
                            <Home setCurrentId={setCurrentId}/>
                        </Route>
                        <Route path="/auth" exact>
                            <Auth />
                        </Route>
                        <Route path="/post" exact>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Route>
                    </Switch>
                </Container>
        </BrowserRouter>
    </GoogleOAuthProvider>
    )
};

export default App;