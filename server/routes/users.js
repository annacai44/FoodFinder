import express from 'express';
import { signin, signup } from '../controllers/user.js';
const router = express.Router();

// post route bc you have to send data to the backend
// when we go to /signin, we call our signin controller
router.post('/signin', signin);
router.post('/signup', signup);

export default router;