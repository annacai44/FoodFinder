import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Container } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost, getPosts } from '../../actions/posts';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
    // setState does not merge an object; it overrides all of the old state. Therefore, when we call it, we must spread out our prev state using ...
    // useState() creates a state for the component
    const [postData, setPostData] = useState({ description: '', location: '', name: '', selectedFile: '' });
    // we only want the data for the updated post, not all the posts
    const post = useSelector((state) => currentId ? state.posts.posts.find((post) => post._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    // this hook runs a function EVERY RENDER of the component; the component renders initially when it first loads and when the state changes
    // a way to run code on every render
    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(null);
        setPostData({ description: '', location: '', name: '', selectedFile: '' });
    }

    // once the user submits, this function will send over a POST request with all the data the user typed in
    const handleSubmit = (e) => {
        // the default action of a form being submitted is to refresh the page, and this prevents this
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();
        history.push('/FoodFinder');
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper}>
                <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant='h6'>Post your leftover food!</Typography>
                    {/* 'value' is going to be stored in the state postData. Each object key is going to be a specific test field. */}
                    {/* onChange changes the value of the state field. */}
                    <TextField required name='description' variant='outlined' label='Description of food' fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}/>
                    <TextField required name='location' variant='outlined' label='Location' fullWidth value={postData.location} onChange={(e) => setPostData({ ...postData, location: e.target.value })}/>
                    <TextField required name='name' variant='outlined' label='Name/Organization' fullWidth value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })}/>
                    <div className={classes.fileInput}>
                        <FileBase type='file' multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}/>
                    </div>
                    <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                    <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Form;