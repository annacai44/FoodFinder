import React from "react";
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import moment from 'moment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from 'react-redux';
import { deletePost, likePost } from "../../../actions/posts";

// get post by destructuring props in the input; props => {post}
const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            {/* need to add title from post; currently don't have a title field */}
            <CardMedia className={classes.media} image={post.selectedFile}/>
            <div className={classes.details}>
                {/* <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => (`#${tag} `))}</Typography> */}
                <Button className={classes.likeButton} size='medium' color='secondary' onClick={()=> dispatch(likePost(post._id))}>
                    <FavoriteIcon fontSize='medium' />
                    {post.likeCount > 1 ? `${post.likeCount} likes` : `${post.likeCount} like`}
                </Button>
                {/* have to keep track of the current ID */}
                <Button variant='outlined' style={{marginRight: 0}} size='small' onClick={() => setCurrentId(post._id)}>
                    Edit
                </Button>
            </div>
            <CardContent>
                <Typography className={classes.title} variant='h5' gutterBottom><b>Food:</b> {post.description}</Typography>
                <Typography className={classes.title} variant='h5' gutterBottom><b>Location:</b> {post.location}</Typography>
                <Typography className={classes.title} variant='h5' gutterBottom><b>Posted by:</b> {post.name} </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Typography variant='body2'>{moment(post.createdAt).fromNow().toUpperCase()}</Typography>
                <Button size='small' color='secondary' onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;

            {/* <div className={classes.overlay}>
                <Typography variant='h6'>{post.description}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size='small' onClick={() => {}}>
                    <MoreHorizIcon fontSize='medium'/>
                </Button>
            </div> */}