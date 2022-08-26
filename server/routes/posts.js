import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);

// to create a post, you need to have an id. auth middleware verifies that you're logged in
router.post('/', auth, createPost);
// see if user has permission to updatePost; if not, remove update and delete buttons on frontend
router.patch('/:id', auth, updatePost);
// if you call middleware (auth) before a specific action, then you can populate the request and have access to the request in the action
router.delete('/:id', deletePost);
// need auth middleware to have specific user's id so they cannot like more than once
// implementing only single like is on the backend
router.patch('/:id/likePost', auth, likePost);

export default router;