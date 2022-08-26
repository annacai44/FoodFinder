import React from "react";
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import moment from 'moment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from "../../../actions/posts";
import { useHistory } from 'react-router-dom';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();

    const Likes = () => {
        if (post?.likes?.length > 0) {
            // _id is custom id we gave from database
            return post.likes.find((like) => like === (user?.result?.sub || user?.result?._id))
                ? (
                <><FavoriteIcon fontSize="medium" className={classes.heartIcon} />&nbsp;{`${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
                ) : (
                <><FavoriteBorderIcon fontSize="medium" className={classes.heartIcon} />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }
        return <><FavoriteBorderIcon fontSize="medium" className={classes.heartIcon} />&nbsp;Like</>;
    };

    const postTimeDifference = moment().diff(moment(post.createdAt), 'hours');
    if (postTimeDifference >= 24) {
        dispatch(deletePost(post._id));
        return null;
    }

    const editPost = () => {
        setCurrentId(post._id);
        history.push('/post');
    }

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile}/>
            <div className={classes.details}>
                <Button disabled={!user?.result} size='medium' className={classes.likeButton} onClick={()=> dispatch(likePost(post._id))}>
                    <Likes />
                </Button>
                {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
                    <Button variant='outlined' style={{marginRight: 0}} size='small' onClick={editPost}>
                        Edit
                    </Button>
                )}
            </div>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.field} variant='h5' gutterBottom><b>Food:</b> {post.description}</Typography>
                <Typography className={classes.field} variant='h5' gutterBottom><b>Location:</b> {post.location}</Typography>
                <Typography className={classes.field} variant='h5' gutterBottom><b>Posted by:</b> {post.name} </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Typography variant='body2'>{moment(post.createdAt).fromNow().toUpperCase()}</Typography>
                {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size='small' variant='outlined' color='secondary' onClick={() => dispatch(deletePost(post._id))}>
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Post;