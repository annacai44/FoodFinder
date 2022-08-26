import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE, START_LOADING, END_LOADING } from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPosts();
        // dispatch an action from the data from the backend
        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log(err);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log(err);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });
        dispatch({ type: END_LOADING });
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