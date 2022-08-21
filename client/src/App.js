import React from "react";
import { Container } from '@material-ui/core';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Form from "./components/Form/Form";

import { GoogleOAuthProvider } from '@react-oauth/google';

import { BrowserRouter, Switch, Route } from "react-router-dom";

// have to keep track of the current post id in APP.JS bc we have to share the state of current id between the post and form,
// and our app is the only parent component that is parent to both post and form

const App = () => (
    <GoogleOAuthProvider clientId='459151855029-k0f07ac9ad193qhq61db5e5ro63qc3bh.apps.googleusercontent.com'>
        <BrowserRouter>
            <Container maxwidth="lg">
                {/* Navbar is not in the switch, so it will appear always */}
                <Navbar />
                {/* Switches components */}
                <Switch>
                    {/* Either show the Home or the Auth component */}
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth}/>
                    <Route path="/post" exact component={Form}/>
                </Switch>
            </Container>
        </BrowserRouter>
    </GoogleOAuthProvider>
);

export default App;





        // <>
        //     <CssBaseline />
        //     <main className={classes.entireBody}>
                    // <AppBar position='sticky'>
                    //         <Toolbar className={classes.toolbar}>
                    //         <div className={classes.logo}>
                    //             <FastfoodSharp className={classes.icon}/>
                    //             <Typography variant='h4'>
                    //                 FoodFinder NU
                    //             </Typography>
                    //         </div>
                    //         <div>
                    //             <Button variant='contained'>Log in</Button>
                    //         </div>
                    //     </Toolbar>
                    // </AppBar>
        //         <div className={classes.container}>
        //             <Container maxWidth='md'>
        //                 <Typography variant='h5' align='center' color='textSecondary' paragraph>
        //                     Got lots of leftover food from an event? Don't know what to do with all of it? 
        //                     Post your food here to alert Wildcats that there's free food waiting for them on campus!
        //                 </Typography>
        //             </Container>
        //         </div>
        //         <Container className={classes.cardGrid} maxWidth='md'>
        //             {/* Grid is for responsive design and for positioning things on the page */}
        //             <Grid container spacing={4} justifyContent='space-around'>
        //                 {cards.map((card) => (
        //                     <Grid item key={card} xs={9} sm={9} md={9} lg={9}>
        //                         <Card className={classes.card}>
        //                             <CardMedia 
        //                                 className={classes.cardMedia}
        //                                 image='https://source.unsplash.com/random'
        //                                 title='Image title'
        //                             />
        //                             <CardContent className={classes.cardContent}>

        //                                 <Typography gutterBottom variant='h6'>
        //                                     <b>Food/Description:</b> Insomnia Cookies
        //                                 </Typography>
        //                                 <Typography gutterBottom variant='h6'>
        //                                     <b>Location:</b> Norris
        //                                 </Typography>
        //                                 <Typography gutterBottom variant='h6'>
        //                                     <b>Posted at:</b> 5:00 pm
        //                                 </Typography>
        //                                 <Typography gutterBottom variant='h6'>
        //                                     <b>From:</b> Willie the Wildcat
        //                                 </Typography>
        //                             </CardContent>
        //                             <Grid container justifyContent='flex-end'>
        //                                     <Button size='medium' color='secondary' style={{float: 'right'}}>
        //                                         Delete
        //                                     </Button>
        //                             </Grid>
        //                         </Card>
        //                     </Grid>
        //                 ))}
        //             </Grid>
        //         </Container>
        //     </main>
        //     <footer className={classes.footer}>
        //         <Typography variant='h6' align='center' gutterBottom>
        //             Yuh get sum free food don't waste
        //         </Typography>
        //         <Grid container justifyContent="center">
        //             <Button align='center'>
        //                 About
        //             </Button>
        //         </Grid>
        //     </footer>
        // </>