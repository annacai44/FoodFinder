import React from "react";
import { Button, Typography, Card, CardContent, CardMedia, CssBaseline, Grid, Container } from '@material-ui/core';
import useStyles from './styles';
import CustomAppBar from "./CustomAppBar";

const cards = [1, 2, 3, 4, 5]
const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <main className={classes.entireBody}>
            <CustomAppBar></CustomAppBar>
                <div className={classes.container}>
                    <Container maxWidth='md'>
                        {/* <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                        </Typography> */}
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Got lots of leftover food from an event? Don't know what to do with all of it? 
                            Post your food here to alert Wildcats that there's free food waiting for them on campus!
                        </Typography>
                        {/* <div className={classes.buttons}>
                            <Grid container spacing={2} justifyContent='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div> */}
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    {/* Grid is for responsive design and for positioning things on the page */}
                    <Grid container spacing={4} justifyContent='space-around'>
                        {cards.map((card) => (
                            <Grid item key={card} xs={9} sm={9} md={9} lg={9}>
                                <Card className={classes.card}>
                                    <CardMedia 
                                        className={classes.cardMedia}
                                        image='https://source.unsplash.com/random'
                                        title='Image title'
                                    />
                                    <CardContent className={classes.cardContent}>

                                        <Typography gutterBottom variant='h6'>
                                            <b>Food/Description:</b> Insomnia Cookies
                                        </Typography>
                                        <Typography gutterBottom variant='h6'>
                                            <b>Location:</b> Norris
                                        </Typography>
                                        <Typography gutterBottom variant='h6'>
                                            <b>Posted at:</b> 5:00 pm
                                        </Typography>
                                        <Typography gutterBottom variant='h6'>
                                            <b>From:</b> Willie the Wildcat
                                        </Typography>
                                    </CardContent>
                                    <Grid container justifyContent='flex-end'>
                                            <Button size='medium' color='secondary' style={{float: 'right'}}>
                                                Delete
                                            </Button>
                                    </Grid>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    Yuh get sum free food don't waste
                </Typography>
                <Grid container justifyContent="center">
                    <Button align='center'>
                        About
                    </Button>
                </Grid>
            </footer>
        </>
    )
};

export default App;