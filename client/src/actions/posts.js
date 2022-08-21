import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// Action Creators: functions that return actions
// action is an OBJECT that has a TYPE and a PAYLOAD
// redux thunk allows us to specify an additional arrow function; we need to use it because we're dealing with async logic

// this action getPosts gets dispatched in App.js; after it gets dispatched, we immediately go to the Posts reducer
// and handle the logic of fetching all posts
export const getPosts = () => async (dispatch) => {
    try {
        // we first get the response from the API, then we destructure the response to just get the data object
        // data represents the posts
        const { data } = await api.fetchPosts();
        // dispatch an action from the data from the backend
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
       const { data } = await api.updatePost(id, post);
       dispatch({ type: UPDATE, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id })
    } catch (err) {
        console.log(err);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: UPDATE, payload: data });
     } catch (err) {
         console.log(err);
     }
}