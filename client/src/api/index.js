// axios is used to implement/make API calls
// axios performs HTTP requests on a particular URL; axios is promise-based
import axios from 'axios';

// axios instance; we want API to make calls to users as well as posts
const API = axios.create({ baseURL: 'http://localhost:5010'});

// need to add something to each one of our requests
// the callback function happens on each request, and the function happens before the request gets carried out
// we need to send our token to the backend so the backend middleware can verify that we're logged in
// With this, our backend will be able to get a specific header
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        // add authorization to each and every request
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

// the GET request returns all the posts in the database
export const fetchPosts = () => API.get('/posts');

// newPost is the POST payload/data
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);